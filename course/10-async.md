# 10. Async Code, Promises, And `await`

This lesson explains how TypeScript models code that finishes later.

## Why Async Exists

Some work does not happen immediately.
Examples include:

- reading from a server
- waiting for a timer
- loading a file

In those cases, your code needs a way to say "I will have the result later."

## Promises

A promise represents a future result.
It is either fulfilled with a value or rejected with an error.

TypeScript lets you describe the type of the promised value.

## `async` And `await`

An `async` function returns a promise.
`await` lets you wait for that promise in a readable way.

This syntax usually feels easier to read than long promise chains.

## Error Handling

Async code can fail.
You should think about success and failure together instead of only the happy path.

## Practical Advice

- Use `await` when it makes the code easier to follow.
- Use `Promise<T>` when you want to describe the eventual value.
- Handle errors clearly and intentionally.

## Quick Recap

- Promises represent future values.
- `async` functions return promises.
- `await` makes promise-based code easier to read.
- Async code should always consider failure.

## Common Mistakes

- Forgetting that `async` changes the return type.
- Ignoring rejected promises.
- Assuming network calls always succeed.

## Try It

Think of one task in real life that has to finish later.
How would you explain that timing to a beginner?

