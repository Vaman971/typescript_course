export {};

type Student = {
  name: string; // mandatory
  age: number; //mandatory
  nickname?: string; //optional
};

// a student object with object type as Student, defined above
const student: Student = {
  name: "Grace",
  age: 16,
};

const scores: number[] = [90, 95, 88];

// a simple function
// a function which names an array if numbers(integrers) as an argument and returns a integer
// function average(values: number[]): number {
//   if (values.length === 0) {
//     return 0;
//   }

//   const total = values.reduce((sum, value) => sum + value, 0);
//   return total / values.length;
// }

// a callback function
const average = (values: number[]): number => {

  if (values.length == 0){
    return 0;
  } 

  const total = values.reduce((sum,value) => sum + value, 0)

  return total/ values.length;
}


const result = average(scores);
console.log(student, result);

