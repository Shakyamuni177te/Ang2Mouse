import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { AuthService }  from './auth.service'; 

@Component({
  moduleId: module.id,
  selector: 'mouse-auth',
  templateUrl: 'login.template.html',
  styleUrls: [ 'login.template.css' ]
})

export class AuthComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
}
