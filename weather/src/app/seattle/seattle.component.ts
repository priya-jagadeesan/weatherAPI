import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather : any;
  seattle_image : String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.seattle_image = "../assets/seattle.jpeg";
    this.getWeatherData();
  }

  getWeatherData(){
    let obs = this._httpService.getWeatherData('5809844');
    obs.subscribe(data => {
      this.weather = data;
    })
  }
}
