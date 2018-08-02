import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorPass() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minLength') ? 'Too short' : '101010';
  }

  login() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(
      res => this.router.navigate(['/courses']),
      error => console.log(error)
    );
  }


  lll() {
    console.log(2232323);
  }


}
