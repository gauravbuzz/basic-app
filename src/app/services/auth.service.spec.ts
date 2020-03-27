import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should not login', () => {
    const service: AuthService = TestBed.get(AuthService);
    let payload = {
      email: 'gauravbuzz@gmail.com',
      password: 'helloWorld'
    }
    service.login(payload).subscribe(value => {
      expect(value.success).toBeFalsy();
    })
  })

  // it('should login', () => {
  //   const service: AuthService = TestBed.get(AuthService);
  //   service.userDb['gpantbiz@gmail.com'] = {
  //     firstname: 'gaurav',
  //     lastname: 'pant',
  //     email: 'gpantbiz@gmail.com',
  //     password: 'abc'
  //   }
  //   let payload = {
  //     email: 'gpantbiz@gmail.com',
  //     password: 'abc'
  //   }
  //   service.login(payload).subscribe(val => {
  //     expect(val).toBeTruthy();
  //   })
  // })
});
