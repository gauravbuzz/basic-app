import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterhttpService {

  constructor(
    private http: HttpClient
  ) { }

  makeGetRequest(url): Observable<Object> {
    return this.http.get(url);
  }

}