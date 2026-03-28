# 07. Classes, Access Modifiers, And Object-Oriented Design

Classes are useful when you want to bundle data and behavior together.

## What A Class Is

A class is a blueprint for creating objects.
It describes what data the object holds and what it can do.

## When Classes Help

Classes are useful when you have:

- reusable object shapes
- state that changes over time
- methods that belong to the object

## Access Modifiers

Access modifiers control who can see or change a class member.

- `public` means accessible from outside
- `private` means only the class itself can use it
- `protected` means the class and its subclasses can use it

## Inheritance

Inheritance means one class builds on another class.
It can reduce duplication, but it should be used carefully.

If inheritance starts to feel forced, composition is often better.

## Composition

Composition means building an object from smaller objects or helper functions.
Many modern codebases prefer composition because it is easier to reason about.

## Abstract Classes

An abstract class is a class that cannot be created directly.
It is used as a base class that other classes must extend.

## Quick Recap

- Classes bundle data and behavior.
- Access modifiers control visibility.
- Inheritance reuses a base class.
- Composition combines smaller pieces.
- Abstract classes define a shared base pattern.

## Common Mistakes

- Using classes when plain objects would be simpler.
- Using inheritance when composition would be clearer.
- Making every field public by habit instead of by design.

## Try It

Think about a real object such as a bank account or a game character.
Would a class make the design clearer, or would simple objects be enough?

