---
title: From LLMs to Agentic AI
draft: false
date: 2025-12-29
publish: true
tags:
- ai
- research
---

This entry breaks down the architectural evolution of modern AI systems as shown in the diagram, moving from simple Large Language Model workflows to fully agentic, multi agent systems.

![[LLMtoAgenticAIdiagram.png]]
Picture from *Agentic Design Patterns: A Hands-On Guide to Building Intelligent Systems by Antonio Gulli*

# 1. Basic LLM Workflow

The most fundamental setup is the classic LLM workflow. A user provides a prompt, which may optionally pass through simple rule based triggers such as formatting checks, routing logic, or safety filters. The prompt is then processed by a large language model, which may have access to fixed data sources or predefined tools, and finally produces an output. 

This architecture is entirely reactive. Every response depends solely on the current prompt. There is no memory of past interactions, no planning across steps, and no understanding of goals beyond what the user explicitly provides. The model acts as a sophisticated text processor rather than an autonomous system.

# 2. Retrieval Augmented Generation (RAG)

Retrieval Augmented Generation enhances the basic workflow by grounding the model in external knowledge. When the user submits a prompt, it is converted into embeddings and used to query a vector database that represents documents, knowledge bases, or other structured data sources. The retrieved information is then injected into the prompt as additional context before the model generates a response.

This approach allows the system to answer questions using private, up to date, or domain specific data without retraining the model. However, despite being better informed, a RAG system is still reactive. It retrieves information once per request and does not reason across multiple steps or pursue objectives over time.

# 3. AI Agents

An AI Agent introduces autonomy and internal decision making. Instead of producing a single response, the agent can reason in multiple steps, plan actions, and decide when to use tools or consult data sources. It may maintain short term or long term memory, track conversation history, and evaluate intermediate results before continuing.

In this architecture, the language model functions as a planner and controller rather than just a responder. The agent can decompose tasks, execute workflows, and adjust its behavior based on outcomes. While more capable than RAG, an AI Agent typically operates as a single entity with a defined scope and responsibility.

# 4. Agentic AI

Agentic AI represents the highest level of abstraction shown in the diagram. Instead of a single agent, the system consists of multiple specialized agents that collaborate. Each agent may have its own memory, reasoning process, and tool access. Tasks can be delegated between agents, results can be shared, and humans can be included in the loop for oversight or decision approval.

This architecture supports complex, long running objectives rather than isolated tasks. The system can adapt to changing conditions, coordinate parallel work, and manage higher level goals. At this stage, intelligence is no longer centralized in one model but distributed across cooperating components.