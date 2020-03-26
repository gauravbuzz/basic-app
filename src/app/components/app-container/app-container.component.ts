import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(
    private coingeckoService: CoingeckoService
  ) { }

  ngOnInit() {
  }

}
