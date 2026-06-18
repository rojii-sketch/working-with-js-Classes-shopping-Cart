// 1. Define the BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0;           // Default balance to 0
    this.transactions = [];     // Array to store transaction records
  }

  // 2. Define the deposit method
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: 'deposit', amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  // 3. Define the withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: 'withdraw', amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  // 4. Define the checkBalance method
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // 5. Define the listAllDeposits method
  listAllDeposits() {
    // Filter for deposits and extract just the amounts
    const depositAmounts = this.transactions
      .filter(t => t.type === 'deposit')
      .map(t => t.amount);
      
    return `Deposits: ${depositAmounts.join(',')}`;
  }

  // 6. Define the listAllWithdrawals method
  listAllWithdrawals() {
    // Filter for withdrawals and extract just the amounts
    const withdrawalAmounts = this.transactions
      .filter(t => t.type === 'withdraw')
      .map(t => t.amount);
      
    return `Withdrawals: ${withdrawalAmounts.join(',')}`;
  }
}

// 7. Create a new instance named myAccount
const myAccount = new BankAccount();

// 8. Execute at least 5 transactions (minimum 2 deposits, 2 withdrawals, final balance > $100)
myAccount.deposit(200);  // Deposit 1
myAccount.deposit(150);  // Deposit 2
myAccount.withdraw(50);  // Withdrawal 1
myAccount.withdraw(30);  // Withdrawal 2
myAccount.deposit(10);   // Transaction 5 (Deposit 3)

// Quick verification check:
console.log(myAccount.checkBalance());      // Output: "Current balance: $280"
console.log(myAccount.listAllDeposits());    // Output: "Deposits: 200,150,10"
console.log(myAccount.listAllWithdrawals()); // Output: "Withdrawals: 50,30"