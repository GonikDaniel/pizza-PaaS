import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../routes/sidebar-routes.config';

@Component({
  selector: 'paas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

