# Lotto Number Generator Blueprint

## Overview
A simple and elegant Lotto Number Generator web application built with vanilla JavaScript and Web Components. It features a modern design, interactive elements, and now supports both Dark and Light modes.

## Features
- **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
- **Web Components:** Uses a custom `<lotto-numbers>` element for encapsulated logic and styling.
- **Dynamic Styling:** Lotto balls are color-coded based on their number ranges.
- **Animations:** Smooth "pop-in" animations for newly generated numbers.
- **Theme Support:** Toggle between Dark Mode (default) and Light Mode.
- **Persistent Preferences:** Remembers the user's theme choice using `localStorage`.

## Design
- **Typography:** Uses the 'Poppins' font for a modern look.
- **Colors:** 
  - Dark Mode: Deep gray background with vibrant yellow highlights.
  - Light Mode: Clean light gray background with bold text and accents.
- **Effects:** Soft shadows, gradients, and a subtle noise texture for a premium feel.
- **Responsive:** Centered layout that works across different screen sizes.

## Technical Details
- **Framework-less:** Built using standard HTML5, CSS3, and ES6+ JavaScript.
- **State Management:** Theme state is managed via the `data-theme` attribute on the `<html>` element.
- **Deployment:** Hosted on GitHub Pages.

## Implementation Plan (Theme Support)
1. **CSS Variables:** Define color schemes for both themes in `style.css`.
2. **Toggle UI:** Add a fixed theme switch button in `index.html`.
3. **Toggle Logic:** Implement JavaScript to switch the `data-theme` attribute and save the preference in `main.js`.
4. **Smooth Transitions:** Add CSS transitions for background and text color changes.
