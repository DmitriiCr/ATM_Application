import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hide = true;

  constructor() {}
  ngOnInit(): void {}
  onClick() {
    this.hide = !this.hide;
    console.log(this.hide);
  }
}
