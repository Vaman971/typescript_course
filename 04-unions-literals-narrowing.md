# 04. Unions, Literal Types, And Narrowing

This lesson teaches how to handle values that can be more than one type.

## Union Types

A union type means "this value can be one of several types."

Example idea:

- a value can be `string` or `number`

That is useful when a variable may change form depending on the situation.

## Literal Types

A literal type is a very specific value instead of a broad category.

Examples:

- `"success"`
- `"error"`
- `0`
- `true`

Literal types are useful when only a few exact values are allowed.

## Narrowing

Narrowing means TypeScript learns more about a value after checking it.

For example, if a value is `string | number`, you can check its type before using it in a type-specific way.

That check narrows the type inside the branch.

## Why Narrowing Matters

TypeScript will not let you call string-only methods on a value that might be a number.
You must prove which type you are dealing with first.

That is a good thing because it prevents runtime mistakes.

## Common Narrowing Tools

- `typeof` for primitive checks
- `Array.isArray` for arrays
- property checks for objects
- custom type guards for reusable checks

## Quick Recap

- Union types allow more than one possible type.
- Literal types describe exact allowed values.
- Narrowing lets TypeScript understand the exact type in a branch of code.

## Common Mistakes

- Trying to use a union value as if it were already the one type you wanted.
- Forgetting to narrow before calling type-specific methods.
- Creating unions so large that the code becomes hard to reason about.

## Try It

Imagine a status value in an app.
What exact text values should be allowed?
Would a union of literal types help?

