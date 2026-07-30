---
title: Crowd Analytics & Movement Prediction
category: Computer Vision
summary: Architecture for crowd movement prediction and venue analytics at large-event scale, currently in design.
order: 5
org: ExpertGroup
period: 2026 — Present
impact:
  - Movement prediction rather than after-the-fact reporting
  - Designed for venue-scale deployment from the outset
stack:
  - Python
  - Computer Vision
  - Azure Fabric
  - Docker
metrics:
  - label: Stage
    value: Architecture & planning
  - label: Scale
    value: Large-venue events
---

Leading the architecture and planning for a crowd analytics platform aimed at
large-event venues — predicting how crowds will move rather than only reporting where
they have been.

The interesting constraint is latency against scale: predictions are only useful if they
arrive before the movement they describe, which pushes a lot of decisions about where
inference runs and what gets aggregated versus processed at the edge. The work is
currently at the architecture and planning stage.
