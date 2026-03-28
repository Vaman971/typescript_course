# 09. Advanced Types You Will Actually See

This lesson introduces advanced type tools that appear in real TypeScript code.

## `keyof`

`keyof` gives you the keys of an object type.
That helps you write safer code when you are working with property names.

## `typeof`

In type position, `typeof` lets you capture the type of a value.
That is helpful when a value already exists and you want its type reused.

## Indexed Access Types

Indexed access types let you ask for the type of a specific property.
That is useful when you want to reuse one part of a larger type.

## Utility Types

TypeScript includes built-in helpers such as:

- `Partial`
- `Required`
- `Pick`
- `Omit`
- `Readonly`
- `Record`
- `ReturnType`
- `Parameters`

These save time and reduce repeated type definitions.

## Mapped Types

A mapped type transforms each property in a type.
They are one of the main tools for building flexible type helpers.

## Conditional Types

Conditional types act like type-level if statements.
They let one type change based on another type.

## Template Literal Types

Template literal types let you build string-like type patterns.
They are useful for controlled strings such as event names or CSS-like tokens.

## `unknown` Vs `any`

- `unknown` means "I do not know this type yet, so I must check before using it."
- `any` means "do not check this value."

Use `unknown` when possible.
Use `any` only when you truly need to opt out of safety.

## `never`

`never` is the type of a value that should not exist.
It is often used for functions that never finish normally or for exhaustive checks.

## `void`

`void` means a function does not return a useful value.
It is common for functions that perform an action such as logging or saving.

## Quick Recap

- `keyof`, `typeof`, and indexed access help you reuse types.
- Utility types are built-in helpers.
- Mapped and conditional types create new types from old ones.
- `unknown` is safer than `any`.
- `never` and `void` describe special return behavior.

## Common Mistakes

- Reaching for advanced types before understanding simple object shapes.
- Using `any` as a shortcut too often.
- Forgetting that advanced types are still just tools for clarity and safety.

## Try It

Pick one object type and ask:

- Which keys are available?
- Which properties could be optional?
- Could `Pick` or `Omit` make a cleaner version of the type?

