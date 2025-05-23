import { google } from '@ai-sdk/google';
import { AgentNetwork } from '@mastra/core/network';
import { weatherDataAgent } from '../agents/weather-data-agent';
import { weatherForecastAgent } from '../agents/weather-forecast-agent';
import { activityRecommendationAgent } from '../agents/weather-recommendation-agent';

// Create the Weather Agent Network
export const weatherNetwork = new AgentNetwork({
  name: 'Weather Network',
  instructions: `
    You are a comprehensive weather assistant that coordinates specialized agents to provide weather information and activity recommendations.
    
    Your role is to understand user queries and coordinate the appropriate specialized agents to fulfill the request. You have access to:
    
    1. Weather Data Agent - Fetches current weather information
    2. Weather Forecast Agent - Analyzes weather patterns and provides forecasts
    3. Activity Recommendation Agent - Suggests activities based on weather conditions
    
    When a user asks about weather or activities:
    1. First, use the Weather Data Agent to get current conditions
    2. Then, use the Weather Forecast Agent to analyze and provide a forecast
    3. Finally, use the Activity Recommendation Agent to suggest suitable activities
    
    Always ask for a location if none is provided. Provide comprehensive, well-structured responses.
  `,
  model: google('gemini-1.5-pro-latest'),
  agents: [weatherDataAgent, weatherForecastAgent, activityRecommendationAgent],
});