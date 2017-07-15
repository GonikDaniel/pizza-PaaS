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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // this.user.valueChanges.subscribe(console.log);
    // this.user.statusChanges.subscribe(() => console.log(this.user.errors))
  }

  login() {
    this.authService.loginWithEmail(this.user.value)
      .then(console.log)
      // .subscribe(
      //   (data) => this.router.navigate(['/app/catalogue']), // this.returnUrl
      //   (error) => this.errorMsg = error
      // );
  }

}
