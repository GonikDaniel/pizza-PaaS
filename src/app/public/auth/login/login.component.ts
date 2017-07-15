import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'paas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
