import { UserService } from './../../../core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

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
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email], this.validateUniqueEmail.bind(this)],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // this.user.valueChanges.subscribe(console.log);
    // this.user.statusChanges.subscribe(() => console.log(this.user.errors))
  }

  public register(): void {
    if (!this.user.valid) {
      return;
    }

    this.authService.registerUser(this.user.value)
      .then(user => {
        return this.saveUserInfo(user);
      })
      .then((user) => {
        this.router.navigate(['/app/catalogue']);
      })
      .catch(error => this.errorMsg = error);
  }

  public registerWithProvider(event: MouseEvent, provider: string): void {
    event.preventDefault();

    this.authService.loginWithProvider(provider)
      .then((authData) => {
        this.saveUserInfo(authData.user);
        this.router.navigate(['/app/catalogue']);
      })
      .catch(error => this.errorMsg = error);
  }

  private saveUserInfo(user) {
    const name = user.displayName || this.user.value.userName;
    const email = user.email || this.user.value.email;
    const avatar = user.photoURL;
    const country = user.country;
    this.userService.updateUserSession(user);
    return this.authService.saveUserInfo(user.uid, name, email, avatar, country);
  }

  private validateUniqueEmail(formControl: FormControl): Observable<any> {
    return Observable.fromPromise(
        this.authService.validateUniqueEmail(formControl.value)
      )
      .map((providers: string[]) => (
        providers.includes('password')
          ? { uniqueEmail: { error: 'Email has to be unique!' } }
          : null
      ));
  }

}
