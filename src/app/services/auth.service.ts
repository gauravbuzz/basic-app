// todo => set static types

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { RegisterModel } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userDb = {};

  register(payload) {
    return Observable.create((observer: Observer<boolean>) => {
      if(!this.userDb[payload.email]){
        this.userDb[payload.email] = payload;
        observer.next(true);
      }
      else{
        observer.next(false);
      }
      observer.complete();
    })
  }

  login(payload) {
    return Observable.create((observer: Observer<RegisterModel>) => {
      let user: RegisterModel = this.userDb[payload.email];
      if (!user) {
        observer.error('user not found');
      }
      else if (user.password !== payload.password) {
        observer.error('invalid credentials');
      }
      else {
        observer.next(user);
      }
      observer.complete();
    })
  }

}
