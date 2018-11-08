// WILKOMMEN INTO MÁJN ATM mesinó, bank transzferálló

// project description:
// Users has a name, bankcardnumber, password, money
// and we have a bunch of users
// ATM has a password, money, and a hasenoughMoney method
// adminUser has a password, and a deposit method(he can only deposit to the ATM now)

// pls use exception handling, avoid code duplicates, and do everything with ES6 (if it's possible)

const users = [
  { name: "Béla", bankcardnumber: 1234123412341234, password: 1000, money: 1000 },
  { name: "Béci", bankcardnumber: 1234123412341235, password: 1001, money: 1000 },
  { name: "Cica", bankcardnumber: 1234123412341236, password: 1002, money: 1000 },
  { name: "Macska", bankcardnumber: 1234123412341237, password: 1003, money: 1000 },
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

const userToDo = {
  checkPassword: (password: number, bankCardNumber: number) => {
    const userInfo = userToDo.checkBankCardNumber(bankCardNumber);
    if (!userInfo) {
      throw 'Wrong bankcardnumber';
    } else if (userInfo.password !== password) {
      throw 'Wrong password';
    } else {
      return userInfo;
    }
  },
  checkBankCardNumber: (bankCardNumber: number) => {
    return users.find(data => data.bankcardnumber === bankCardNumber);
  },
  withdraw: (cash: number, password: number, bankCardNumber: number) => {
    const user = userToDo.checkPassword(password, bankCardNumber);
    if(user) {
      user.money -= cash;
      ATM.money -= cash;
    }
  },
  checkHowMoney: (password: number, bankCardNumber: number) => { 
    const user = userToDo.checkPassword(password, bankCardNumber);
    if(user) {
      return user.money;
    } else {
      throw 'something went wrong';
    }
  }
}

// userToDo has checkpassword method
// a checkbankcardnumber method
// a withdraw, a checkhowmoney, and checkcash method

try {
  // adminUser.deposit(1000);
  userToDo.withdraw(1000, 1000, 1234123412341234);
  console.log(userToDo.checkHowMoney(1000, 1234123412341234));
} catch (e) {
  console.log(e);
}
