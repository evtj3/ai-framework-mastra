import { createTool } from '@mastra/core/tools';
import {z} from 'zod';
// Define the funny responses
const funnyResponses = [
    "I would tell you a joke about programming, but it only works on my machine.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "I'm not lazy, I'm just in energy-saving mode.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I would tell you a UDP joke, but you might not get it.",
    "There are 10 types of people in the world: those who understand binary and those who don't.",
    "Why did the developer go broke? Because they lost their domain in a crash.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "My code doesn't have bugs, it just develops random unexpected features."
  ];
  
  // Define the triggers
  const triggers = {
    greeting: ["hello", "hi", "hey", "greetings"],
    farewell: ["bye", "goodbye", "see you", "later"],
    question: ["?", "what", "how", "why", "when", "where", "who"],
    frustration: ["angry", "mad", "frustrated", "annoying", "stupid"],
    gratitude: ["thanks", "thank you", "appreciate", "grateful"]
  };
// Define the tools
export const getRandomFunnyResponse =  createTool({
    id: "getRandomFunnyResponse",
    description: "Get a random funny response",
    outputSchema: z.string(),
    execute: async () => {
      const randomIndex = Math.floor(Math.random() * funnyResponses.length);
      return funnyResponses[randomIndex];
    }
});
  
export const detectTriggers = createTool({
    id: "detectTriggers",
    description: "Detect triggers in user input",
    inputSchema: z.object({
      userInput: z.string().describe('The user input to analyze for triggers')
    }),
    outputSchema: z.array(z.string()),
    execute: async ({ context }) => {
      const activeTriggers = [];
      const lowerInput = context.userInput.toLowerCase();
      
      for (const [triggerType, patterns] of Object.entries(triggers)) {
        for (const pattern of patterns) {
          if (lowerInput.includes(pattern)) {
            activeTriggers.push(triggerType);
            break;
          }
        }
      }
      
      return activeTriggers;
    }
  });