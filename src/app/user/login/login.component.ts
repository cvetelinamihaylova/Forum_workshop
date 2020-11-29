import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = {
    email: {
      touched: false,
      value: ''
    },
    password: {
      touched: false,
      value: ''
    }
  }

  constructor(
    private userService: UserService) { }

  get showEmailError(): boolean{
    return this.form.email.touched && this.form.email.value.length == 0;
  }
  get showPasswordError(): boolean{
    return this.form.password.touched && this.form.password.value.length == 0;
  }
  get hasFormErrors(): boolean{
    return this.form.email.value.length == 0 || this.form.password.value.length == 0
  }
  updateInputValue(name: 'email' | 'password', value: string): void {
    this.form[name].value = value;
    this.form[name].touched = true;
  }
  submitLoginHandler(): void{
    this.userService.login();
  