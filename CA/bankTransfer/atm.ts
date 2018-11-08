import { adminUser } from './admin';
import { userToDo } from './userToDo';

try {
  adminUser.deposit(1000);
  // userToDo.withdraw(2000, 1000, 1234123412341234);
  console.log(userToDo.checkHowMoney(1000, 1234123412341234));
} catch (e) {
  console.log(e);
}
