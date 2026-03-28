# TypeScript Cheatsheet

## Core Ideas

- TypeScript is JavaScript with static type checking.
- Types help describe values before the code runs.
- `strict` mode catches more bugs.

## Basic Types

- `string`
- `number`
- `boolean`
- `null`
- `undefined`

## Useful Language Features

- Union types: `A | B`
- Literal types: `"ready"` or `42`
- Optional properties: `name?: string`
- Readonly properties: `readonly id: number`
- Tuples: `[string, number]`
- Generics: `<T>`

## Special Types

- `any` skips checking.
- `unknown` requires checking before use.
- `never` means a value should not exist.
- `void` means no useful return value.

## Common Utilities

- `Partial<T>`
- `Required<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Readonly<T>`
- `Record<K, T>`
- `ReturnType<T>`
- `Parameters<T>`

## Compiler Settings Worth Knowing

- `strict`
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- `useUnknownInCatchVariables`

## Good Learning Question

For any TypeScript feature, ask:

- What problem does it solve?
- What bug does it prevent?
- Is it simpler than the alternative?

