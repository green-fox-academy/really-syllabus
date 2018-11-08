// WILKOMMEN INTO MÁJN ATM mesinó, bank transzferálló

// project description:
// Users has a name, bankcardnumber, password, money
// and we have a bunch of users
// ATM has a password, money, and a hasenoughMoney method
// adminUser has a password, and a deposit method(he can only deposit to the ATM now)
// userToDo has checkpassword method, a checkbankcardnumber method
// a withdraw, a checkhowmoney, and checkcash method

// pls use exception handling, avoid code duplicates, and do everything with ES6 (if it's possible)

const users = [
  {name: "Béla", bankcardnumber: 1234123412341234, password: 1000, money: 1000},
  {name: "Béci", bankcardnumber: 1234123412341235, password: 1001, money: 1000},
  {name: "Cica", bankcardnumber: 1234123412341236, password: 1002, money: 1000},
  {name: "Macska", bankcardnumber: 1234123412341237, password: 1003, money: 1000},
];

const ATM = {
  password: 1234,
  money: 2000,
  hasEnoughMoney: () => {
  }
}

const adminUser = {
  password: 1234,
  deposit: (cash: number) => {
    if (ATM.password === adminUser.password) {
      ATM.money += cash;
    } else {
      throw 'Passwords are incorrect';
    }
  }
}

try {
  adminUser.deposit(1000);
  console.log(ATM.money);
} catch(e) {
  console.log(e);
}
