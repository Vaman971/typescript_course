export {};

// auto detecting what type is the value.
const learnerName = "Ada";
const greeting = `Hello, ${learnerName}`;

let lessonCount = 1;
lessonCount = lessonCount + 1;

// providing explicity what is the value type
const isReady: boolean = true;
const favoriteNumber: number = 7;

console.log(greeting, lessonCount, isReady, favoriteNumber);

