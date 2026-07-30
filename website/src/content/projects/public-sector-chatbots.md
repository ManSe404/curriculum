---
title: Public Administration RAG Chatbots
category: Generative AI
summary: Retrieval-augmented chatbots for public administration and other public-sector services, where a wrong answer is a citizen misinformed.
order: 6
org: ExpertGroup
period: 2025 — Present
impact:
  - Citizens get answers without queuing for a caseworker
  - Responses grounded in official published sources
  - Administrative load reduced on repetitive enquiries
stack:
  - Python
  - LangChain
  - RAG
  - Azure Fabric
  - Docker
metrics:
  - label: Sector
    value: Public administration
  - label: Architecture
    value: Grounded RAG
---

## The problem

Public administration runs on a large body of published rules that citizens are expected
to navigate, and most enquiries to a public office are the same questions asked again.
The obvious fix is a chatbot, but the obvious fix is also where it gets difficult: a
consumer chatbot that occasionally invents an answer is annoying, whereas a public-sector
one that invents an answer has told a citizen something untrue about their rights or
obligations.

## The approach

I delivered RAG chatbots for public administration and other public-sector services,
built so that correctness was structural rather than hoped for:

- **Grounded retrieval** over official published sources, so answers are derived from the
  actual regulation or procedure rather than model recall.
- **Traceability**, keeping the link between an answer and the source it came from — the
  difference between a helpful answer and a defensible one.
- **Scoped refusal**, so the system declines and routes onward when a question falls
  outside what the source material covers, instead of producing a confident guess.

## The outcome

Routine enquiries get answered immediately and from official sources, which takes
repetitive load off administrative staff without putting citizens at the mercy of a
plausible-sounding invention.
