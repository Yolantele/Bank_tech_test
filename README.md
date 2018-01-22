## Banking Tech Test

User Stories:

```
As a User
So that I can store my money safely
I want to open a bank account
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

# Key Features

- interact with your code via a REPL like IRB or the JavaScript console.
- Transactions: Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (non DB).


## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

```

## Solution Design to problem:
 To drive well crafter OOD, I took a test-driven approach, and looked into extracting multiple small classes/object factories withing the bank operations: Bank class, Bank Statement/renderer class, Account class. A further transaction class could be extracted (please see extension/improvement suggestions bellow).

## How the code is structured 
Account class - responsible for tracking status of the account - current balance and transactions history. As well as executing a time-stamped transaction. 
Renderer class - responsible for translating account data to readable format , ready for User. 
Bank class - responsible for storing multiple accounts , trancking the volume of existing accounts. 

## Extensions and major improvement suggestions
After taking the route of account and rendered classes, I see a strong possibility for redesigning the key objects: mainly that a further transaction class could be extracted. This would help with  time-stamping each transaction and removing this responsibility from Account class. Account class would then hold the log of all transactions and current status of the account. logTime function would become timeStamp fucntion inside transaction class. 

## To run application/tests

clone this repository.
to set up the dependencies, run the commands in terminal:
```
cd bank-tech-test
```
```
npm install
```
```
open SpecRunner.html
```
