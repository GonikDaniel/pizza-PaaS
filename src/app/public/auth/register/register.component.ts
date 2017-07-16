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
    private authService: AuthService
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

  public register() {
    if (!this.user.valid) {
      return;
    }

    this.authService.registerUser(this.user.value)
      .then((user) => this.router.navigate(['/app/catalogue']))
      .catch(error => this.errorMsg = error);
  }

  private validateUniqueEmail(formControl: FormControl) {
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
