# 06. Generics

Generics let you write code that works with many types without losing type safety.

## The Core Idea

Instead of saying "this function only works with strings," you say "this function works with whatever type the caller gives me."

That makes code more reusable and still type-safe.

## Why Generics Exist

Without generics, you might rewrite the same logic for strings, numbers, and objects.

Generics let you write the logic once.

## A Good Mental Model

Think of a generic as a placeholder for a type.
The caller fills in the real type later.

## Common Generic Patterns

- Functions that return the same type they receive
- Arrays and collections
- Wrapper objects
- API response shapes

## Constraints

Sometimes you want a generic type, but only if it has certain properties.
That is where constraints help.

Example idea:

- only allow values that have a `length` property

## Generics In Real Life

Generics show up in utility code, data fetching, and libraries.
Once you understand them, many TypeScript error messages become much easier to read.

## Quick Recap

- Generics let code work with many types.
- They keep reusable code type-safe.
- Constraints limit what kinds of types are allowed.

## Common Mistakes

- Using generics when a simple type is enough.
- Forgetting that the caller chooses the type.
- Writing generic code that is more clever than readable.

## Try It

Ask yourself:

- Where in my code do I repeat the same logic for different types?
- Could a generic remove that duplication?

