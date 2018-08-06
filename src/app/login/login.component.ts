import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = new FormControl('', [
    Validators.required
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
    console.log(this.loginForm);
  }

  getErrorUsername() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minLength') ? 'Too short' : '';
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
     if (data.success) {
        console.log('you successfully logged in!');
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/courses']);
      } else {
        alert(data.msg);
        this.router.navigate(['/login']);
      }
    });
  }

}
