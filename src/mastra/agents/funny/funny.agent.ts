import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { funny_instruction1 } from "../../instructions";
// import { getRandomFunnyResponse, detectTriggers } from '../tools';

export const funnyAgent = new Agent({
  name: "FunnyAgent",
  instructions: funny_instruction1,
  model: google("gemini-1.5-pro-latest"),
  // memory: new Memory({
  //     storage: new LibSQLStore({
  //         url: 'file:../mastra.db', // path is relative to the .mastra/output directory
  //     }),
  //     options: {
  //         lastMessages: 10,
  //         semanticRecall: false,
  //         threads: {
  //         generateTitle: false,
  //         },
  //     },
  // }),
  // tools: { getRandomFunnyResponse, detectTriggers }
});
