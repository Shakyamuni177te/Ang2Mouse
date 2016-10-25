import { Component } from '@angular/core';
import { AuthService }      from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login.template.html'
})

export class LoginComponent {
  constructor(private auth: AuthService) {}
};
