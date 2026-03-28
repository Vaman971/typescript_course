export {};

abstract class Account {
  constructor(protected owner: string, private balance: number) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  protected getBalance(): number {
    return this.balance;
  }

  abstract describe(): string;
}

class SavingsAccount extends Account {
  describe(): string {
    return `${this.owner} has a savings account with ${this.getBalance()} bucks`;
  }
}

const account = new SavingsAccount("Ada", 100);
account.deposit(50);
console.log(account.describe());

// COMPOSITION EXAMPLE: Building objects from smaller helper functions
// Instead of inheritance, we compose smaller behaviors together
class Balance {
  constructor(private amount: number) {}
  
  add(amount: number): void {
    this.amount += amount;
  }
  
  get(): number {
    return this.amount;
  }
}

class ComposedAccount {
  private balance: Balance;

  constructor(private owner: string, initialBalance: number) {
    this.balance = new Balance(initialBalance); // Composition: using Balance helper
  }

  deposit(amount: number): void {
    this.balance.add(amount);
  }

  describe(): string {
    return `${this.owner} has an account with ${this.balance.get()} bucks`;
  }
}

const composedAccount = new ComposedAccount("Bob", 200);
composedAccount.deposit(75);
console.log(composedAccount.describe());

