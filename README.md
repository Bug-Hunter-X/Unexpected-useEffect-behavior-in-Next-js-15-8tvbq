# Unexpected useEffect behavior in Next.js 15

This repository demonstrates an unexpected behavior in the `useEffect` hook within a Next.js 15 application. The `useEffect` hook, designed to perform side effects after rendering, is causing an infinite loop and unnecessary component re-renders.

## Bug Description

The `About` page uses `useEffect` to update a counter every second. However, this leads to an infinite re-rendering loop, drastically impacting performance.  The issue stems from the way the `useEffect`'s dependency array and the state update are handled. The constant re-renders flood the console and negatively affect the user experience.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Observe the console output and the counter behavior. You'll notice that the counter increments rapidly, and the console is flooded with 'UseEffect' logs, indicating an infinite loop.

## Solution

The provided solution addresses the issue by correctly managing the `useEffect` hook's dependency array and optimizing the state update.
