# AI Agent Framework: Build Smart Systems with Mastra AI
## Overview

Mastra AI Framework is a powerful, flexible toolkit designed to simplify the development of intelligent agent-based systems. This framework provides developers with the essential building blocks to create, deploy, and manage AI agents that can perform complex tasks, learn from interactions, and integrate seamlessly with existing applications.

### Key Features

- **Modular Architecture**: Build agents from reusable components that can be combined and customized to suit your specific needs.
- **Multi-Agent Coordination**: Create systems where multiple agents collaborate to solve complex problems.
- **Natural Language Processing**: Leverage advanced NLP capabilities for human-like interactions.
- **Knowledge Management**: Efficiently store, retrieve, and reason with domain-specific knowledge.
- **Tool Integration**: Connect your agents to external tools, APIs, and data sources.
- **Learning Capabilities**: Implement agents that improve over time through various learning mechanisms.
- **Deployment Flexibility**: Run your agents locally, in the cloud, or at the edge.

### Why Choose Mastra AI Framework?

- **Developer-Friendly**: Intuitive APIs and comprehensive documentation make it easy to get started.
- **Extensible**: Add custom capabilities to meet your specific requirements.
- **Production-Ready**: Built with performance, security, and scalability in mind.
- **Open Ecosystem**: Integrate with popular AI/ML libraries and frameworks.

Whether you're building virtual assistants, autonomous systems, or intelligent process automation, Mastra AI Framework provides the foundation you need to bring your AI agent vision to life.


### Setup
```bash
   # clone the repository
   $ git clone https://github.com/evtj3/ai-framework-mastra.git

   # install dependencies
   $ pnpm install
```

copy the env variables from the **.env-sample** to **.env.development** and add your gemini api key
```bash
    # .env.development
    GEMINI_API_KEY=your-api-key-here
```

### Run the project
```bash
   # run the project in development mode
   $ pnpm dev
```

### Access the Mastra Playground
visit: [localhost:4111](http://localhost:4111)

### Exercises
The exercises folder contains a series of exercises and tutorials to help you get started with Mastra AI Framework. Each exercise is designed to introduce you to a specific aspect of the framework.
1. [Exercise 1: Reactive Agent](./execises/exercise-1.md) - 10 mins
2. [Exercise 2: Deliberative Agent](./execises/exercise-2.md) - 10 mins
3. [Exercise 3: Tool Integration](./execises/exercise-3.md) - 10 mins
4. [Exercise 4: Workflow](./execises/exercise-4.md) - 10 mins

### Folder Structure 
    ai-framework-mastra/
    ├── execises/                # Example exercises and tutorials
    │   ├── exercise-1.md
    │   ├── exercise-2.md
    │   ├── exercise-3.md
    │   └── exercise-4.md
    ├── src/
    │   └── mastra/
    │       ├── agents/          # Agent definitions
    │       ├── instructions/    # Agent instructions and prompts
    │       ├── memory/          # Shared memory store
    │       ├── networks/        # Agent networks (multi-agent coordination)
    │       ├── tools/           # Custom tools for agents
    │       └── workflows/       # Workflow definitions
    │       └── index.ts         # Main entry for Mastra
    ├── README.md
    ├── package.json
    ├── pnpm-lock.yaml
    ├── tsconfig.json
    └── .gitignore