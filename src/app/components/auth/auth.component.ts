import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.dataSource$.subscribe(data => {
      console.log(data)
    })

    this._dataService.testBehaviorSubscription();
  }

}
