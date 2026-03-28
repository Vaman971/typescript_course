export {};

interface Person {
  name: string;
  age: number;
  nickname?: string;
  readonly id: string;
}

type Employee = Person & {
  role: "developer" | "designer" | "manager";
};

const employee: Employee = {
  id: "emp-1",
  name: "Ada",
  age: 30,
  role: "developer",
};

function formatPerson(person: Person): string {
  return person.nickname ? `${person.name} (${person.nickname})` : person.name;
}

console.log(formatPerson(employee));

