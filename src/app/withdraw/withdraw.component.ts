import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent implements OnInit {
  balance = 0;

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {}

  OnSubmitAmount(amount: number) {
    this.service.WithdrawFromBalance(+amount);
  }
  ReturnMenu() {
    this.router.navigate(['/home']);
  }
}
