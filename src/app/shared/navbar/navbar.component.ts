import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../routes/sidebar-routes.config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'paas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  private listTitles: any[];
  public location: Location;

  constructor(location:Location) {
    this.location = location;
  }

  ngOnInit(){
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle(){
    var title = this.location.prepareExternalUrl(this.location.path());
    if(title.charAt(0) === '#'){
      title = title.slice( 2 );
    }
    for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === title){
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
}

