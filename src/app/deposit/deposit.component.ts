import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  balance = 0;

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {}

  OnSubmitAmount(amount: number) {
    this.service.AddToBalance(+amount);
  }
  ReturnMenu() {
    this.router.navigate(['/home']);
  }
}
