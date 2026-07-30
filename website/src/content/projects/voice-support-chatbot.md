---
title: Voice-Enabled Support Chatbot
category: Conversational AI
summary: A telephone-based voice support system spanning speech-to-text, intent recognition, dialogue flow, and text-to-speech.
order: 12
org: Valcon Netherlands
period: 2022 — 2023
impact:
  - End-to-end voice interaction over telephony
  - Designed for high availability
stack:
  - Python
  - Docker
  - Azure LUIS
  - Azure Speech Services
  - Azure Bot Service
  - Telephony
---

Built a voice support system for telephone-based customer interactions, covering the
full conversational loop: speech-to-text, intent recognition, entity extraction,
dialogue flow management, and text-to-speech back to the caller.

Telephony integration and high availability were first-class design constraints — a
support line that drops calls is worse than no support line, so the architecture was
built around that from the beginning.
