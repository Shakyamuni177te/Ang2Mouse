// import injection, routing and authentication modules
import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

import { Router } from '@angular/router';

//variable contains Auth0Lock data and functions
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('xhpJWNQ30P4KsAr5uql9LBQJuoYtUTXo', 'peterdcarter.eu.auth0.com');
  
  // create authentication routing
  constructor(private router: Router) {

    this.lock.on('authenticated', (authResult: any) => {

      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {

        if (error) {

          console.log(error);

        }

        localStorage.setItem('profile', JSON.stringify(profile));

      });

      this.lock.hide();

    });

  }
  
  // login function
  login() {

    this.lock.show();

  }
  

  // logout function
  logout() {

    // To log out, just remove the token and profile

    // from local storage

    localStorage.removeItem('profile');

    localStorage.removeItem('id_token');

    // Send the user back to the dashboard after logout

    this.router.navigateByUrl('/dashboard');

  }
  
  // check to see if a user is already logged in
  loggedIn() {

    return tokenNotExpired();

  }

}
