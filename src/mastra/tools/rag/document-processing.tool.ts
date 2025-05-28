import { createTool } from '@mastra/core/tools';
import { MDocument } from '@mastra/rag';
import { z } from 'zod';
import { embedMany } from "ai";
import { google } from "@ai-sdk/google";
import { PgVector } from "@mastra/pg";
let pgVector;
if (process.env.POSTGRES_CONNECTION_STRING) {
  pgVector = new PgVector({
    connectionString: process.env.POSTGRES_CONNECTION_STRING!,
  });
}
export const dimension = 512;
export const createChunks =  createTool({
    id: "createChunks",
    description: "Split a string into chunks",
    inputSchema: z.object({
        text: z.string(),
    }),
    outputSchema: z.array(z.string()),
    execute: async ({ context }) => {
        const doc = MDocument.fromText(context.text);
        const chunks = await doc.chunk({
            strategy: "recursive",
            size: dimension,
            overlap: 10,
            separator: "\n",
        });
        return chunks.map(chunk => chunk.text)
    }
});
export const storeEmbeddings = createTool({
  id: "storeEmbeddings",
  description: "Store embeddings for a string",
  inputSchema: z.object({
    chunks: z.array(z.string()),
  }),
  outputSchema: z.string(),
  execute: async ({ context }) => {
    if (!pgVector) {
      return `No vector store found, skipping embedding storage`;
    }
    const { chunks } = context;
    const { embeddings } = await embedMany({
      values: chunks,
      model: google.textEmbeddingModel("text-embedding-004", {
        outputDimensionality: dimension, // optional, number of dimensions for the embedding
        taskType: "SEMANTIC_SIMILARITY", // optional, specifies the task type for generating embeddings
      }),
    });

    const vectorStore = pgVector;
    await vectorStore.createIndex({
      indexName: "embeddings",
      dimension: dimension,
    });
    await vectorStore.upsert({
      indexName: "embeddings",
      vectors: embeddings,
      metadata: chunks?.map((chunk: any) => ({ text: chunk })),
    });
    return `Stored ${chunks.length} embeddings`;
  },
});

export { pgVector };