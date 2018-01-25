import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    let obs = this._httpService.getWeatherData('4229546');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}
