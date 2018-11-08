export const ATM = {
  password: 1234,
  money: 2000,
  hasEnoughMoney: function (cash: number): boolean {
    return this.money - cash >= 0;
  }
}
