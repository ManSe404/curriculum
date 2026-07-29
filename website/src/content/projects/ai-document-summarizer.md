---
title: AI-Powered Document Summarizer
category: Generative AI
summary: Document summarization and point-of-interest extraction across large multi-document sets, built to speed up delivery for high-growth companies.
featured: true
order: 1
org: 404 Solutions
client: Provectus
period: 2024 — Present
impact:
  - Faster turnaround on document-heavy review processes
  - Key points surfaced automatically rather than found by hand
  - Consistent output across large, mixed-format document sets
stack:
  - Python
  - AWS
  - Snowflake
  - Docker
  - S3
  - Step Functions
  - AWS SAM
  - LangChain
  - LlamaIndex
metrics:
  - label: Scope
    value: Multi-document
  - label: Sectors
    value: Insurance · Manufacturing · Biomedicine
---

## The problem

High-growth companies accumulate documents faster than anyone can read them. The
bottleneck was rarely storage — it was that the substance of a set of documents could
only be established by a person going through them one at a time, which made
document-heavy steps the slowest part of delivery.

## The approach

I built a summarization system covering three distinct jobs, because "summarize this"
turns out to be several different problems:

- **Document summarization** — condensing an individual document without losing the
  detail that made it worth reading.
- **Point-of-interest extraction** — pulling out the specific items that matter for a
  given workflow, rather than producing prose someone still has to mine.
- **Multi-document summarization** — synthesizing across a set, so the output reflects
  what the collection says rather than being a pile of per-file summaries.

The pipeline runs serverless on AWS: S3 for document landing, Step Functions for
orchestration, and AWS SAM for reproducible deploys. It was built to be multi-tenant
from the start, since it serves several organisations across different sectors —
insurance, manufacturing, and biomedical work among them — each with its own document
conventions and its own idea of what counts as interesting.

## The outcome

Document-heavy stages stopped being the constraint on delivery. Reviewers start from
extracted points of interest and a synthesis across the whole set, instead of from page
one of file one — and because the extraction is systematic, what gets surfaced no longer
depends on who happened to be reading.
