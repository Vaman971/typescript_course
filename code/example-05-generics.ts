export {};

function firstItem<T>(items: readonly T[]): T | undefined {
  return items[0];
}

function wrapInBox<T>(value: T) {
  return { value };
}

const firstName = firstItem(["Ada", "Grace", "Lin"]);
const box = wrapInBox({ label: "course", count: 3 });

console.log(firstName, box.value);

