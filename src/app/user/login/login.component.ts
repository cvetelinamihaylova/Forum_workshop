import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(
    private userService: UserService,
    private router: Router) { }

 
  submitLoginHandler(formValue: {email: string, password: string}): void{
    this.userService.login(formValue).subscribe(()=>{
      this.router.navigate(['/'])
    })
  } 
}
