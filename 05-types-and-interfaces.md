# 05. Type Aliases, Interfaces, And Shape Modeling

This lesson shows how to describe the shape of objects in a clean way.

## Type Aliases

A type alias gives a name to a type.
It is useful when a type is long or reused many times.

## Interfaces

An interface is another way to describe an object shape.
Interfaces are especially common for objects and class contracts.

## Which One Should You Use

In many beginner projects, both work well.
The difference matters less than understanding what problem you are solving.

Simple rule of thumb:

- Use a type alias for unions, utility combinations, or general type expressions.
- Use an interface when describing object shapes or public contracts.

## Optional Properties

An optional property may or may not exist.
This is useful when some data is only available sometimes.

Example idea:

- a user may have a `nickname`, but it is not required

## Readonly Properties

A readonly property can be read, but not changed after creation.
That helps protect data you do not want mutated accidentally.

## Tuples

A tuple is an array with a fixed number of items and known positions.

Example idea:

- first item is a string
- second item is a number

Tuples are good when position matters.

## Enums

Enums are a TypeScript feature for named sets of values.
They can be useful, but many teams prefer unions of literal values because they are simpler and more JavaScript-like.

If you use enums, know why you are using them.

## Quick Recap

- Type aliases name types.
- Interfaces describe object shapes.
- Optional properties may be missing.
- Readonly properties cannot be reassigned.
- Tuples have fixed positions.
- Enums exist, but literal unions are often simpler.

## Common Mistakes

- Using an interface for everything without understanding the tradeoffs.
- Confusing optional with nullable.
- Treating tuples like ordinary arrays.

## Try It

Model a simple object such as a book, a course, or a task.
Decide which fields are required, optional, and readonly.

