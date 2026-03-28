export {};

// T denotes any type, the function can work for any datatype, if the arguments are given in strings, then it will set T to string
function firstItem<T>(items: readonly T[]): T | undefined {
  return items[0];
}

function wrapInBox<T>(value: T) {
  return { value };
}

// Constraints: only allow types that have a length property
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

const firstName = firstItem(["Ada", "Grace", "Lin"]);
const box = wrapInBox({ label: "course", count: 3 });

console.log(firstName, box.value);
console.log(getLength("hello"), getLength([1, 2, 3]));

