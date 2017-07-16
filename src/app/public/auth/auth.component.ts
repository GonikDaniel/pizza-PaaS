import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'paas-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // TODO: наверное тут лучше guard все же..
  // + можно смотреть откуда пришел и редиректить обратно
  ngOnInit() {
    // if (this.authService.isAuthenticated) {
    //   this.router.navigate(['/app/catalogue']);
    // }
  }

}
