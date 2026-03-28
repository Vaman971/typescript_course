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
    return `${this.owner} has a savings account.`;
  }
}

const account = new SavingsAccount("Ada", 100);
account.deposit(50);
console.log(account.describe());

