# Fun AI Tools Blueprint

## Overview
A web platform featuring multiple interactive AI-powered tools, including a Lotto Number Generator and an AI Animal Face Test. Built with vanilla JavaScript, Web Components, and TensorFlow.js.

## Core Features
1. **Lotto Number Generator:**
   - Generates 6 unique random numbers (1-45).
   - Custom `<lotto-numbers>` Web Component.
   - Dynamic color-coding and "pop-in" animations.

2. **AI Animal Face Test:**
   - Uses a Teachable Machine model to classify user photos as "Dog" or "Cat".
   - Integrated with TensorFlow.js and the `@teachablemachine/image` library.
   - Features image upload with drag-and-drop support and real-time preview.
   - Displays results with visual progress bars and fun descriptions.

3. **Global Features:**
   - **Theme Support:** Dark Mode (default) and Light Mode with persistence via `localStorage`.
   - **Modern UI:** Glassmorphism effects, responsive layout, and smooth CSS transitions.
   - **Community & Contact:** Disqus comments and Formspree partnership form.

## Design
- **Typography:** 'Poppins' font family.
- **Visuals:** Subtle noise texture, multi-layered shadows, and vibrant accent colors.
- **Responsiveness:** Fluid layout that adapts to mobile and desktop screens.

## Technical Stack
- **Frontend:** HTML5, CSS3 (Modern Baseline features), ES6+ JavaScript.
- **AI/ML:** Teachable Machine (TensorFlow.js).
- **Services:** Formspree (Forms), Disqus (Comments), GitHub Pages (Hosting).

## Recent Updates
- Added AI Animal Face Test section.
- Redesigned layout into modular "Tool Sections".
- Integrated Teachable Machine classification logic.
- Added drag-and-drop file upload support.
