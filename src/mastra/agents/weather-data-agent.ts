import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools/weather-tool';
import { Memory } from '@mastra/memory';
import { memoryStore } from '../memory';
// Weather Data Agent - Responsible for fetching current weather data
export const weatherDataAgent = new Agent({
    name: 'Weather Data Agent',
    instructions: `
      You are a specialized agent responsible for providing accurate weather data.
      
      Your primary function is to fetch current weather information for specific locations.
      When responding:
      - Always provide complete and accurate weather data
      - Include temperature, humidity, wind conditions, and precipitation
      - Format the data in a clear, structured way
      - Keep responses factual and concise
  
      Use the weatherTool to fetch current weather data.
    `,
    model: google('gemini-1.5-pro-latest'),
    tools: { weatherTool },
    memory: new Memory({
      storage: memoryStore,
    }),
  });