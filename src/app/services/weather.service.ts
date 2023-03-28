import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environments } from '../environments';
import { WeatherData } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(`${environments.url}/rapidapi/forecast/${cityName}/summary/`, { 
    headers : new HttpHeaders()
    .set(environments.XRapidAPIHostHeaderName,environments.XRapidAPIHostHeaderValue)
    .set(environments.XRapidAPIKeyHeaderName,environments.XRapidAPIKeyHeaderValue)
  })
  }

}
