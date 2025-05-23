
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { weatherAgent } from './agents/weather-agent';
import { weatherDataAgent } from './agents/weather-data-agent';
import { weatherForecastAgent } from './agents/weather-forecast-agent';
import { activityRecommendationAgent } from './agents/weather-recommendation-agent';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherNetwork } from './networks/weather-network';
import { funnyWorkflow } from './workflows/funny.workflow';
import { funnyAgent } from './agents/funny.agent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow, funnyWorkflow },
  agents: { 
    funnyAgent,
    weatherAgent, 
    weatherDataAgent, 
    weatherForecastAgent, 
    activityRecommendationAgent,
  },
  networks: { weatherNetwork },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
