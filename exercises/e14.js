
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const arr = []

  for (const i of array) {
    let deps = 0.00
    let withs = 0.00
    if ("deposits" in i)
      for (const j of i.deposits)
        deps += j
    if ("withdrawals" in i)
      for (const j of i.withdrawals)
        withs += j
    if (deps - withs !== i.balance)
      arr.push(i)
  }
  return arr
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
