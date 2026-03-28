export {};

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loadMessage(): Promise<string> {
  await wait(10);
  return "Loaded";
}

async function main(): Promise<void> {
  try {
    const message = await loadMessage();
    console.log(message);
  } catch (error: unknown) {
    console.error("Unexpected error", error);
  }
}

void main();

