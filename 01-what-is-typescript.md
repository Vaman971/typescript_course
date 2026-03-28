# 01. What Is TypeScript?

This lesson explains the relationship between JavaScript and TypeScript in plain language.

## JavaScript First

JavaScript is the language that runs in browsers and on Node.js.
It is dynamic, which means values can change shape at runtime.

That flexibility is powerful, but it also means some bugs show up late.

## TypeScript Adds A Layer

TypeScript lets you describe your data more clearly.
You can say:

- This value is a string.
- This function returns a number.
- This object must have a `name` property.
- This array contains only booleans.

These descriptions are checked before the program runs.

## A Simple Example

Imagine a function that greets a person.

Without TypeScript, you might write code and hope the input is correct.
With TypeScript, you can state the expected shape of the input.

That makes the function easier to understand, easier to reuse, and harder to misuse.

## Why Beginners Should Care

When you are new, type errors may feel like extra work.
In reality, they are often the fastest way to learn what your code actually expects.

TypeScript teaches you to think clearly about data.
That skill is useful in every language, not just TypeScript.

## What Happens When You Compile

TypeScript code is checked and then turned into JavaScript.
The type information disappears after checking.

That is why TypeScript can be added to existing JavaScript projects gradually.

## Quick Recap

- JavaScript is the runtime language.
- TypeScript adds static type checking.
- Types help you describe values and catch mistakes earlier.
- The compiled output is still JavaScript.

## Common Mistakes

- Expecting TypeScript to stop every possible runtime bug.
- Confusing type checking with program execution.
- Treating types as busywork instead of documentation and safety.

## Readiness Check

If you can explain why TypeScript is helpful before you write a program, you are ready for the next lesson.

