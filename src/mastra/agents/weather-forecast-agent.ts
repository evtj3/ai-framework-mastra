import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { memoryStore } from '../memory';
// Weather Forecast Agent - Responsible for analyzing weather patterns and providing forecasts
export const weatherForecastAgent = new Agent({
    name: 'Weather Forecast Agent',
    instructions: `
      You are a specialized agent responsible for analyzing weather patterns and providing forecasts.
      
      Your primary function is to interpret weather data and provide meaningful forecasts. When responding:
      - Analyze the provided weather data to identify patterns
      - Provide short-term (1-3 days) weather predictions
      - Explain weather trends in simple, understandable terms
      - Highlight any significant weather changes or events
      - Keep responses informative but concise
    `,
    model: google('gemini-1.5-pro-latest'),
    memory: new Memory({
      storage: memoryStore,
    }),
  });