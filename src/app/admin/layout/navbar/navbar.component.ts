import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../core/user/user.service';

@Component({
  selector: 'paas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
