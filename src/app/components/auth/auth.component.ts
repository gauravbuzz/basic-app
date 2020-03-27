import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as constants from '../../../environments/environment';
import { Router } from '@angular/router';
declare const gapi: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('gLogin') gLoginViewChild: ElementRef;

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) { }
  
  googleAuth: any;
  bootstrapGoogleOAuth(){
    gapi.load('auth2', () => {
      this.googleAuth = gapi.auth2.init({
        client_id: constants.environment.google_client_id,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin();
      // this.attachSignin(document.getElementById('fgle'));
    });
  }

  attachSignin(){
    this.googleAuth.attachClickHandler(this.gLoginViewChild.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        var token = googleUser.getAuthResponse().access_token;
        console.log(profile);
        this._router.navigate(['app/dashboard'])
      }, (error) => {
        console.log(error);
      });
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.bootstrapGoogleOAuth();
    }, 1000);
  }

  ngOnInit() {
    this._dataService.dataSource$.subscribe(data => {
    })
    this._dataService.testBehaviorSubscription();
  }

}
