# 02. Values, Variables, And Types

This lesson covers the basic building blocks: values, variables, annotations, and inference.

## Values

A value is something your program can hold.
Examples include:

- `42`
- `"hello"`
- `true`
- `null`
- `undefined`

## Variables

A variable is a named container for a value.
In TypeScript, you usually use `let`, `const`, or sometimes `var`.

- `const` means the variable will not be reassigned.
- `let` means the variable can change later.
- `var` is old JavaScript style and is usually avoided.

## Type Annotations

A type annotation tells TypeScript what kind of value belongs in a variable.

Example idea:

- `let age: number = 20`

That means `age` must always hold a number.

## Type Inference

Type inference means TypeScript figures out the type for you.

Example idea:

- `const name = "Ada"`

TypeScript understands that `name` is a string even if you do not write `: string`.

Inference is one of the nicest features of TypeScript because it reduces repetition.

## Primitive Types

The most common primitive types are:

- `string` for text
- `number` for numeric values
- `boolean` for `true` and `false`
- `null` for an intentional empty value
- `undefined` for a missing value

## When To Annotate

Annotate a variable when:

- You want to make the intended type very clear.
- TypeScript cannot infer enough from the code.
- You want a function signature or public API to be explicit.

## When To Trust Inference

If the type is obvious from the code, inference is often better.
That keeps the code cleaner.

## Quick Recap

- A value is data.
- A variable holds a value.
- An annotation tells TypeScript the expected type.
- Inference lets TypeScript figure out the type automatically.

## Common Mistakes

- Writing a type annotation everywhere even when inference is obvious.
- Confusing `null` and `undefined`.
- Using `let` when `const` would make the code clearer.

## Try It

Look at a few variables in your own notes and ask:

- Could TypeScript infer this type automatically?
- Would a manual annotation make the code easier to understand?

