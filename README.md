## Banking Tech test

User Stories:

```
As a User
So that I can store my money safely
I want open a bank account
```

```
As a User
So that I can comfortably use my funds
I want to withdraw and deposit safely,
```

```
As a User
So that I can keep track of funds
I want to see a visual Account Statement (Date, Transactions and Balance)
```

```
As the Maintainer
So that I can manage many Accounts
I want the accounts to be Saved using unique names
```

```
As the Maintainer
So that I can keep track of accounts system
I want to store accounts data.
```

# Features
- interact with your code via a REPL like IRB or the JavaScript console.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (non DB).


# Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
