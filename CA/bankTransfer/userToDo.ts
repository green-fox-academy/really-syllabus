import { users } from './users';
import { ATM } from './machine';

export const userToDo = {
  checkPassword: function (password: number, bankCardNumber: number): any {
    const userInfo = this.checkBankCardNumber(bankCardNumber);
    if (!userInfo) {
      throw 'Wrong bankcardnumber';
    } else if (userInfo.password !== password) {
      throw 'Wrong password';
    } else {
      return userInfo;
    }
  },
  checkBankCardNumber: (bankCardNumber: number): any => (
    users.find(data => data.bankcardnumber === bankCardNumber)
  ),
  withdraw: function (cash: number, password: number, bankCardNumber: number): void {
    const user = this.checkPassword(password, bankCardNumber);
    if (ATM.hasEnoughMoney(cash) && user && this.checkCash(cash, user)) {
      user.money -= cash;
      ATM.money -= cash;
    } else if (!ATM.hasEnoughMoney(cash)) {
      throw 'ATM NO MONEYMONEYMONEY';
    } else if (!this.checkCash(cash, user)) {
      throw `${user.name} NO MONEYMONEYMONEY`;
    }
  },
  checkHowMoney: function (password: number, bankCardNumber: number): number {
    const user = this.checkPassword(password, bankCardNumber);
    if (user) {
      return user.money;
    } else {
      throw 'something went wrong';
    }
  },
  checkCash: (cash: number, user: any): boolean => (user.money - cash >= 0)
}
