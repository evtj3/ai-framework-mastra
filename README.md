# Weather Agent Network with Mastra AI

This project demonstrates the implementation of a weather agent network using Mastra AI. The network consists of specialized agents that work together to provide comprehensive weather information and activity recommendations.

## Project Structure

```
src/
├── mastra/
│   ├── agents/
│   │   ├── weather-agent.ts       # Basic weather agent
│   │   └── weather-network.ts     # Weather agent network implementation
│   ├── tools/
│   │   └── weather-tool.ts        # Tool for fetching weather data
│   ├── workflows/
│   │   └── weather-workflow.ts    # Weather workflow implementation
│   └── index.ts                   # Main Mastra configuration
└── examples/
    └── weather-network-example.ts # Example usage of the weather network
```

## Weather Agent Network

The weather agent network consists of three specialized agents:

1. **Weather Data Agent**: Fetches current weather information for specific locations
2. **Weather Forecast Agent**: Analyzes weather patterns and provides forecasts
3. **Activity Recommendation Agent**: Suggests activities based on weather conditions

These agents are coordinated by the Weather Network, which routes user queries to the appropriate specialized agent.

## How It Works

1. The user sends a query to the Weather Network
2. The Weather Network analyzes the query and determines which specialized agent(s) to call
3. The Weather Data Agent fetches current weather information
4. The Weather Forecast Agent analyzes the data and provides a forecast
5. The Activity Recommendation Agent suggests suitable activities based on the forecast
6. The Weather Network compiles the information and returns a comprehensive response

## Running the Example

To run the example:

```bash
# Install dependencies
npm install

# Run the example
npm run dev
```

Then, in another terminal:

```bash
node .mastra/output/examples/weather-network-example.mjs
```

## Customization

You can customize the agents by modifying their instructions in `src/mastra/agents/weather-network.ts`. Each agent has specific instructions that define its behavior and response format.

## Dependencies

- `@mastra/core`: Core Mastra AI framework
- `@mastra/memory`: Memory management for agents
- `@mastra/libsql`: Database storage for agent memory
- `@ai-sdk/google`: Google AI models integration
- `zod`: Schema validation