export {};

type Student = {
  name: string;
  age: number;
  nickname?: string;
};

const student: Student = {
  name: "Grace",
  age: 16,
};

const scores: number[] = [90, 95, 88];

function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return total / values.length;
}

const result = average(scores);
console.log(student, result);

