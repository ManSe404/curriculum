---
title: Supply Chain & Sales Forecasting
category: Machine Learning
summary: Gradient-boosted time series models predicting sales demand to drive supply chain planning.
order: 7
org: ExpertGroup
period: 2025 — Present
impact:
  - Demand forecasts feeding supply chain decisions
  - Gradient boosting chosen over deep sequence models for interpretability and fit
stack:
  - Python
  - XGBoost
  - Time Series
  - Azure Fabric
  - Docker
metrics:
  - label: Method
    value: Gradient-boosted trees
  - label: Target
    value: Demand forecasting
---

Built time series forecasting for supply chain planning, predicting sales demand so that
stock and procurement decisions could be made against a forecast rather than against last
period's numbers.

The modelling used gradient-boosted trees (XGBoost) with engineered temporal features —
lags, rolling statistics, calendar and seasonality effects — rather than a deep sequence
model. On tabular business data at this scale that trade is usually the right one: it fits
comparably or better, trains in a fraction of the time, and stays interpretable enough
that a planner can see *why* a forecast moved. A forecast nobody trusts does not change
any decisions.
