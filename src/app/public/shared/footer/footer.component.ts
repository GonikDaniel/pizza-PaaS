import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'paas-public-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public date: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
