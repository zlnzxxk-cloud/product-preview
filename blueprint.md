# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. The user can click a button to generate a new set of 6 unique numbers between 1 and 45.

## Project Outline

### Style and Design

*   **Layout:** A clean, centered layout that is responsive and works well on mobile and web.
*   **Color Palette:** A modern and vibrant color scheme.
*   **Typography:** Clear and readable fonts.
*   **Effects:** Subtle animations on the lottery numbers and a "glow" effect on the button.
*   **Background:** A subtle noise texture for a premium feel.
*   **Iconography:** Use of icons to enhance understanding.

### Features

*   **Lottery Number Generation:** Generates 6 unique random numbers from 1 to 45.
*   **Interactive Button:** A button to trigger the generation of new numbers.
*   **Web Component:** A custom element `<lotto-numbers>` will be used to display the generated numbers, encapsulating its structure, style, and behavior.

## Current Plan

1.  **Create `blueprint.md`:** Document the project's purpose, design, features, and the current plan.
2.  **Modify `index.html`:**
    *   Update the title to "Lotto Number Generator".
    *   Add a main container for the application.
    *   Include a header with a title and a short description.
    *   Add a `<lotto-numbers>` custom element to display the numbers.
    *   Add a button to generate new numbers.
3.  **Modify `style.css`:**
    *   Implement the modern design with a vibrant color palette, custom fonts, and responsive layout.
    *   Add styles for the lottery number balls, including animations.
    *   Style the "Generate" button with a glow effect.
4.  **Modify `main.js`:**
    *   Create the `LottoNumbers` web component.
    *   Implement the logic for generating 6 unique random numbers between 1 and 45.
    *   Add an event listener to the "Generate" button to call the number generation function and update the `<lotto-numbers>` component.
