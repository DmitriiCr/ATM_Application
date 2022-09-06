import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  BalanceChanged = new Subject<number>();
  balance = 2000;

  get getBalance() {
    return this.balance;
  }

  AddToBalance(amount: number) {
    if (amount >= 0) {
      this.balance += amount;

      this.BalanceChanged.next(this.balance);
    }
  }

  WithdrawFromBalance(amount: number) {
    if (amount >= 0 && this.balance - amount >= 0) {
      this.balance -= amount;

      this.BalanceChanged.next(this.balance);
    }
  }
}
