import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'paas-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMsg;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // this.user.valueChanges.subscribe(console.log);
    this.user.statusChanges.subscribe(() => console.log(this.user.errors))
  }

  public register() {
    if (!this.user.valid) {
      return;
    }

    this.authService.registerUser(this.user.value)
      .then(console.log)
      // .subscribe(
      //   (user) => this.loginWithCredentials(user.email, user.password),
      //   (error) => console.error(error)
      // );
  }

  private loginWithCredentials(email, password) {
    this.authService.loginWithCredentials({ email, password })
      .subscribe(
        (data) => this.router.navigate(['/app/catalogue']), // this.returnUrl
        (error) => this.errorMsg = error
      );
  }

  // private uniqueEmail(formControl: FormControl) {
  //   if (!this.userService.isEmailUnique(formControl.value)) {
  //     return Observable.of({ uniqueEmail: { error: 'Email has to be unique!' } });
  //   }
  //   return Observable.of(null);
  // }

  // private uniqueUsername(formControl: FormControl) {
  //   if (!this.userService.isUsernameUnique(formControl.value)) {
  //     return Observable.of({ uniqueUsername: { error: 'Username has to be unique!' } });
  //   }
  //   return Observable.of(null);
  // }

}
