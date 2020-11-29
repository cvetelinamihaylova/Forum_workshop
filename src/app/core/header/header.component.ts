import { UserService } from '../../user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string;
  constructor(public userService: UserService) { }

  loginHandler() {
    this.userService.login();
    this.username = "sansa";
  }

  logoutHandler() {
    this.userService.logout();
  }

}
