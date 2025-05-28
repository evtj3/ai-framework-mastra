import { google } from "@ai-sdk/google";
import { createVectorQueryTool } from "@mastra/rag";
import { dimension } from "./document-processing.tool";

export const vectorQueryTool = createVectorQueryTool({
    vectorStoreName: "pgVector",
    indexName: "embeddings",
    model: google.textEmbeddingModel('text-embedding-004', {
        outputDimensionality: dimension, // optional, number of dimensions for the embedding
        taskType: 'SEMANTIC_SIMILARITY', // optional, specifies the task type for generating embeddings
    }),
});
