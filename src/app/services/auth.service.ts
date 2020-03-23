// todo => set static types

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userDb = {
    'gpantbiz@gmail.com':{
      firstname: 'gaurav',
      lastname: 'pant',
      password: 'hello world'
    }
  };

  register(payload){
    return Observable.create((observer: Observer<any>) => {
      this.userDb[payload.email] = payload;
      observer.next(true);
      observer.complete();
    })
  }

  login(payload){
    return Observable.create((observer: Observer<any>) => {
      let user = this.userDb[payload.email];
      if(!user) {
        observer.error('user not found');
        observer.complete();
      }
      else if(user.password !== payload.password){
        observer.error('invalid credentials');
        observer.complete();
      }
      else{
        observer.next(user);
        observer.complete();
      }
    })
  }

}
