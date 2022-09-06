import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  private changedBalance: Subscription | undefined;
  balance = 0;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.balance = this.appService.getBalance;
    this.changedBalance = this.appService.BalanceChanged.subscribe(
      (balance) => {
        this.balance = balance;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.changedBalance) this.changedBalance.unsubscribe();
  }
}
