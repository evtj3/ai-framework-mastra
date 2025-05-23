import { LibSQLStore } from '@mastra/libsql';

// Create a shared memory store for all agents
export const memoryStore = new LibSQLStore({
    url: 'file:../mastra.db', // path is relative to the .mastra/output directory
});
  