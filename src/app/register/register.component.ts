import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
  getErrorName() {
    return this.email.hasError('required') ? 'You must enter a name' :
      this.email.hasError('minLength') ? 'Name is too short' :
        this.email.hasError('maxLength') ? 'Name is too long' :
          this.email.hasError('pattern') ? 'Name must not contain spaces and "_-" symbols' : '';
  }
  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter an email' :
      this.email.hasError('minLength') ? 'Email is too short' :
        this.email.hasError('maxLength') ? 'Name is too long' : '';
  }
  getErrorPass() {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('minLength') ? 'Password is too short' : '';
  }

  register() {
    this.authService.registerUser(this.registerForm.value).subscribe(
      (res) => {
        alert('you successfully registered!');
        this.router.navigate(['/login']);
      },
      error => console.error(error)
    );
  }
}
