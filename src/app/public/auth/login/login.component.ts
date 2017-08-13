import { UserService } from './../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'paas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMsg;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // this.user.valueChanges.subscribe(console.log);
    // this.user.statusChanges.subscribe(() => console.log(this.user.errors))
  }

  login(): void {
    this.authService.loginWithEmail(this.user.value)
      .then(user => {
        this.userService.updateUserSession(user);
        this.router.navigate(['/app/catalogue']);
      })
      .catch(error => this.errorMsg = error);
  }

}
