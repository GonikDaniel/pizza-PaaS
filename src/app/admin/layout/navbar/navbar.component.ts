import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../routes/sidebar-routes.config';

@Component({
  selector: 'paas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];

  constructor() {
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

}
