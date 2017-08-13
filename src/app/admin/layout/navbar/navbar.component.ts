import { UserService } from './../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../routes/sidebar-routes.config';

@Component({
  selector: 'paas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user;
  private listTitles: any[];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

}
