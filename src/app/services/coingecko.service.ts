import { Injectable } from '@angular/core';
import * as constants from '../../environments/environment';
import { MasterhttpService } from './masterhttp.service';
import { Observable, Observer } from 'rxjs';
import { ApiResponse } from '../models/apiResponse.model';
const coingeckoApi: string = constants.environment.coingeckoApi;
@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {

  constructor(
    private http: MasterhttpService
  ) {
    this.ping().subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  createObservable(handel): Observable<ApiResponse> {
    return Observable.create((observer: Observer<any>) => {
      handel.subscribe(data => {
        observer.next({
          success: true,
          error: null,
          data
        });
        observer.complete();
      }, err => {
        observer.error({
          success: false,
          error: err,
          data: null
        });
      })
    })
  }

  ping() {
    return this.createObservable(this.http.makeGetRequest(coingeckoApi + 'ping'));
  }

  getTickers(){

  }

  getTickerPrices(){
    
  }
}
