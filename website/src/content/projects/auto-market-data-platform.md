---
title: Auto Market Data Platform
category: Data Engineering
summary: Multi-source ingestion combining production databases and web-scraped data into a centralized lake for market analytics.
order: 5
org: Publicis Sapient
period: 2023 — 2024
impact:
  - Single normalized view across previously disconnected sources
  - Analytics-ready data for downstream consumers
stack:
  - Python
  - Azure
  - Docker
  - Data Lake
  - Snowflake
  - Databricks
  - Azure Data Factory
  - FastAPI
---

Built a multi-source ingestion pipeline for auto market analytics, combining production
database inputs with web-scraped market data in a centralized data lake.

Processing and normalization ran through Databricks and Python, turning heterogeneous
raw inputs into a consistent analytical layer that downstream teams could actually query
without re-deriving the joins themselves.
