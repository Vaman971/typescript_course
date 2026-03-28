# 12. Debugging And Common Beginner Errors

This lesson is about surviving the moments when TypeScript feels frustrating.

## Type Errors Are Information

A type error is not TypeScript being mean.
It is TypeScript telling you that your assumptions do not match the code.

## Read The Error Slowly

When you get an error:

1. Read the main message.
2. Find the line number.
3. Ask what TypeScript expected.
4. Ask what your code actually gave it.

## Common Beginner Errors

- Trying to use a value that could be `undefined`
- Calling a method on the wrong type
- Forgetting to narrow a union
- Mixing up optional and required properties
- Passing the wrong shape of object to a function

## Debugging Strategy

When the compiler complains, simplify the code mentally.
Try to answer:

- What type does this value really have?
- What branch am I in?
- What value is actually missing?

## When To Use A Type Assertion

A type assertion tells TypeScript, "trust me, I know what this is."
Use that carefully.

If you reach for assertions too early, you may hide a real bug.

## When To Ask For Help

Ask for help when:

- the same error keeps appearing
- the code compiles but behavior is still wrong
- you do not understand the shape of the data

## Quick Recap

- Type errors are clues.
- Read the exact message, not just the first scary words.
- Debug by checking assumptions.
- Type assertions should be used with care.

## Common Mistakes

- Panicking when the compiler complains.
- Silencing errors instead of understanding them.
- Trying to fix everything at once.

## Final Learning Habit

If you remember only one thing from this course, remember this:

TypeScript becomes easier when you think in terms of data shapes, possible states, and safe boundaries.

