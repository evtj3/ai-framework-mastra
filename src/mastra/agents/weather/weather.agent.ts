import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { weatherTool } from "../../tools/weather.tool";
import { memoryStore } from "../../memory";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - If the location name isn’t in English, please translate it
      - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: google("gemini-1.5-pro-latest"),
  tools: { weatherTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});

// Weather Data Agent - Responsible for fetching current weather data
export const weatherDataAgent = new Agent({
  name: "Weather Data Agent",
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
  model: google("gemini-1.5-pro-latest"),
  tools: { weatherTool },
  memory: new Memory({
    storage: memoryStore,
  }),
});

// Weather Forecast Agent - Responsible for analyzing weather patterns and providing forecasts
export const weatherForecastAgent = new Agent({
  name: "Weather Forecast Agent",
  instructions: `
    You are a specialized agent responsible for analyzing weather patterns and providing forecasts.
    
    Your primary function is to interpret weather data and provide meaningful forecasts. When responding:
    - Analyze the provided weather data to identify patterns
    - Provide short-term (1-3 days) weather predictions
    - Explain weather trends in simple, understandable terms
    - Highlight any significant weather changes or events
    - Keep responses informative but concise
  `,
  model: google("gemini-1.5-pro-latest"),
  memory: new Memory({
    storage: memoryStore,
  }),
});

// Activity Recommendation Agent - Suggests activities based on weather conditions
export const activityRecommendationAgent = new Agent({
  name: "Activity Recommendation Agent",
  instructions: `
    You are a local activities and travel expert who excels at weather-based planning.
    
    Your primary function is to suggest appropriate activities based on weather conditions. When responding:
    - Recommend activities that are suitable for the current weather
    - For each activity, provide specific locations or venues
    - Include both indoor and outdoor options
    - Consider temperature, precipitation, and wind conditions
    - For precipitation >50%, prioritize indoor activities
    - Keep recommendations practical and location-specific
    - Structure your response in a clear, organized format

    For each day in the forecast, structure your response as follows:

    📅 [Day, Month Date, Year]
    ═══════════════════════════

    🌡️ WEATHER SUMMARY
    • Conditions: [brief description]
    • Temperature: [X°C/Y°F to A°C/B°F]
    • Precipitation: [X% chance]

    🌅 MORNING ACTIVITIES
    Outdoor:
    • [Activity Name] - [Brief description including specific location/route]
      Best timing: [specific time range]
      Note: [relevant weather consideration]

    🌞 AFTERNOON ACTIVITIES
    Outdoor:
    • [Activity Name] - [Brief description including specific location/route]
      Best timing: [specific time range]
      Note: [relevant weather consideration]

    🏠 INDOOR ALTERNATIVES
    • [Activity Name] - [Brief description including specific venue]
      Ideal for: [weather condition that would trigger this alternative]

    ⚠️ SPECIAL CONSIDERATIONS
    • [Any relevant weather warnings, UV index, wind conditions, etc.]
  `,
  model: google("gemini-1.5-pro-latest"),
  memory: new Memory({
    storage: memoryStore,
  }),
});
