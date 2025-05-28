
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import * as agents from "./agents";
import * as workflows from "./workflows";
import * as networks from "./networks";
import { pgVector } from "./tools";

export const mastra = new Mastra({
  workflows,
  agents,
  networks,
  vectors: { pgVector },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
