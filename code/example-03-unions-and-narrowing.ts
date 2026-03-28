export {};

type Id = string | number;

function printId(id: Id): string {
  // narrowing, without this you can not 
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return `ID-${id}`;
}

type Status = "idle" | "loading" | "success" | "error";

function describeStatus(status: Status): string {
  switch (status) {
    case "idle":
      return "Nothing is happening yet.";
    case "loading":
      return "Work is in progress.";
    case "success":
      return "It worked.";
    case "error":
      return "Something went wrong.";
  }
}

console.log(printId("abc"), printId(42), describeStatus("success"));

