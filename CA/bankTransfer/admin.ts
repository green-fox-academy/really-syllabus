import { ATM } from './machine';

export const adminUser = {
  password: 1234,
  deposit: function (cash: number): void {
    if (ATM.password === this.password) {
      ATM.money += cash;
    } else {
      throw 'Passwords are incorrect';
    }
  }
}
