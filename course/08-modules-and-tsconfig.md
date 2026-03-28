# 08. Modules, Imports, Exports, And `tsconfig`

This lesson explains how TypeScript files connect to each other and how the compiler is configured.

## Modules

A module is a file that shares code with other files using `import` and `export`.

Modules keep code organized and prevent everything from living in one giant file.

## Imports And Exports

Use exports to share something from one file.
Use imports to use that thing in another file.

This is one of the most important habits in real projects.

## `tsconfig.json`

`tsconfig.json` tells TypeScript how to behave.
It is the main configuration file for the compiler.

## Important Options In This Course

- `strict`: turns on important safety checks
- `noUncheckedIndexedAccess`: forces you to handle possibly missing array items
- `exactOptionalPropertyTypes`: makes optional properties more precise
- `useUnknownInCatchVariables`: encourages safer error handling
- `noEmit`: type-checks without writing JavaScript output

## Why Strict Mode Matters

Strict mode catches more bugs and teaches better habits.
It can feel demanding at first, but it is one of the best ways to learn TypeScript correctly.

## Project Organization

As a project grows, you usually split code by feature or responsibility.
That keeps files focused and easier to read later.

## Quick Recap

- Modules are files that share code.
- Imports and exports connect files.
- `tsconfig.json` controls the compiler.
- Strict settings make TypeScript more useful.

## Common Mistakes

- Leaving everything in one file.
- Turning strict mode off to avoid learning the rules.
- Ignoring compiler options without understanding the tradeoff.

## Try It

Open `tsconfig.json` and read each option slowly.
Ask yourself what bug each setting is trying to prevent.

