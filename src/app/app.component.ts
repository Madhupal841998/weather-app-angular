import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  cityName: string = 'Mumbai';
  weatherData: any = [];
  forecastlocation: string;
  forecastTemp: number;
  filterweatherData: any = [];
  setHot: boolean = true;
  setCold: boolean = false
  constructor(
    private weatherservice: WeatherService,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.getWeather();
    this.createForm();
  }
  getWeather() {
    this.weatherservice.getWeatherData(this.cityName).subscribe((data) => {
      this.weatherData = data
      this.forecastlocation = this.weatherData.location.name;
      this.forecastTemp = (this.weatherData.forecast.items[0].temperature.max + this.weatherData.forecast.items[0].temperature.min) / 2;
      if (this.forecastTemp > 15) {
        this.setHot = true;
        this.setCold = false;
      } else {
        this.setHot = false;
        this.setCold = true;
      }
      for (let i = 0; i <= 5; i++) {
        this.filterweatherData[i] = this.weatherData.forecast.items[i];

      }
    })
  }

  createForm() {
    this.searchForm = this.fb.group({
      keyword: ['']
    })
  }

  searchGrid() {
    let keyword = this.searchForm.controls['keyword'].value;
    if (keyword === '') {
      this.filterweatherData = this.filterweatherData;
    } else {

      keyword = keyword.toLowerCase();
      this.cityName = keyword;
      this.getWeather();
    }
  }

  clear() {
    this.searchForm.get('keyword')?.setValue('');
    this.searchGrid();
  }
}
