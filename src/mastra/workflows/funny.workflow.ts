
import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import { funnyAgent } from '../agents/funny.agent';

const funnyWorkflow = createWorkflow({
    id: 'funny-workflow',
    inputSchema: z.object({
      input: z.string().describe('The input to the workflow'),
    }),
    outputSchema: z.string(),
  })
  
const funnyStep = createStep({
  id: 'get-random-funny-response',
  description: 'Get a random funny response',
  inputSchema: z.object({
    input: z.string().describe('The input to the step'),
  }),
  outputSchema: z.string(),
  execute: async ({ inputData }) => {
    return funnyAgent.generate(inputData.input)
  }
})
  
funnyWorkflow.then(funnyStep)

funnyWorkflow.commit();

export { funnyWorkflow };
