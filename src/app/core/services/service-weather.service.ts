import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWeatherService {
 
  private urlApi = `https://openweathermap.org/data/2.5/find?q=`;

  constructor(private http:HttpClient) { }

  public getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${city}&appid=439d4b804bc8187953eb36d2a8c26a02`);
  }
}
