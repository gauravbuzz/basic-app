import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSource$ = new BehaviorSubject(null);
  obsDataSource(data){
    this.dataSource$.next(data);
  }




  testBehaviorSubscription(){
    this.dataSource$.subscribe(data => {
      console.log(data);
    })

    this.obsDataSource({
      test: null
    })
  }

  constructor() {

  }
}
