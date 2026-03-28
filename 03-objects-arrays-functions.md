# 03. Objects, Arrays, And Functions

This lesson covers the core structures you will use constantly.

## Objects

An object groups related data together.
Think of it like a labeled box with multiple fields.

Example idea:

- A person may have a `name`, `age`, and `isStudent` property.

TypeScript lets you describe the shape of the object.
That means the compiler can check whether the object has the right properties.

## Arrays

An array is an ordered list of values.

Example ideas:

- A list of names
- A list of scores
- A list of booleans

In TypeScript, you should describe what kind of items the array contains.
That stops you from accidentally mixing unrelated values.

## Functions

A function is reusable code.
It can accept inputs and return an output.

TypeScript helps you describe:

- parameter types
- return types
- optional parameters
- default values

## Why Functions Matter

Functions are how you break large problems into smaller pieces.
TypeScript becomes especially useful here because a clear function signature acts like a contract.

## Example Thinking Pattern

When you design a function, ask:

- What input should it accept?
- What output should it produce?
- What should happen if the input is missing or invalid?

## Quick Recap

- Objects store related fields.
- Arrays store ordered lists.
- Functions take input, do work, and return output.
- TypeScript helps describe all three clearly.

## Common Mistakes

- Putting unrelated data into one object just because it is convenient.
- Forgetting to describe the type of array elements.
- Writing functions that accept too much and promise too little.

## Try It

Try to describe a real-world thing in your own words:

- a student
- a book
- a shopping cart

Then ask yourself what fields it should have and what types those fields should use.

