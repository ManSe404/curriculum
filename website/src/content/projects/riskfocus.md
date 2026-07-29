---
title: RiskFocus — Risk Summariser Enhancement
category: Generative AI
summary: Multi-document data lineage and knowledge-base-backed prompting for risk assessment workflows, with guided Q&A for decision support.
featured: true
order: 3
impact:
  - Risk factors managed per line of business
  - Traceable lineage across multiple source documents
  - Guided Q&A workflows supporting decision-making
stack:
  - Python
  - LangChain
  - AWS Lambda
  - ECS
  - S3
  - AWS Bedrock
  - Step Functions
  - RAG
metrics:
  - label: Domain
    value: Risk assessment
  - label: Lineage
    value: Multi-document
---

## The problem

Risk assessment workflows depend on evidence spread across many documents. Summarising
them is only half the job — assessors also need to know *where* each claim came from,
and risk factors that matter for one line of business are noise for another.

## The approach

I built RiskFocus as an enhancement to an existing risk summariser:

- **Multi-document data lineage**, so every element of a summary traces back to the
  source document it came from. Without this, assessors cannot defend a conclusion.
- **Risk factor management by line of business**, letting each business line define the
  factors relevant to it instead of sharing one flat taxonomy.
- **Knowledge-base-backed prompts**, grounding generation in curated domain knowledge
  rather than leaving the model to improvise risk language.
- **Q&A workflows** for guided decision-making, so assessors could interrogate the
  evidence instead of only reading a static summary.

Delivered on AWS with Bedrock for inference, Step Functions for orchestration, and
Lambda plus ECS for the processing tiers.

## The outcome

Assessors moved from reading generated summaries to working with them — able to follow
any statement back to its source, tune the risk lens to their own line of business, and
ask follow-up questions against the underlying evidence.
