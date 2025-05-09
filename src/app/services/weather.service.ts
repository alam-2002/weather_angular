import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: String): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders().set(
        environment.rapidAPIHostHeaderName,
        environment.rapidAPIHostHeaderValue
      ).set(
        environment.rapidAPIKeyHeaderName,
        environment.rapidAPIKeyHeaderValue
      ),
      params: new HttpParams()
        .set('q', cityName.toString())
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }

  //  getWeatherData(cityName:string):Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
  //   });
  //  }
}
