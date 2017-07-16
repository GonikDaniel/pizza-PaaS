import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'paas-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.logout()
      .then(() => this.router.navigate(['/']));
  }

}
