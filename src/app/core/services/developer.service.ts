import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Notification } from '../interfaces/notification';
import { Commit } from '../interfaces/commit';
import { Server } from '../interfaces/server';
import { DeliveryReport } from '../interfaces/delivery-reports';
import { Rol } from '../interfaces/rol';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class DevelopersService {
  private api = `http://localhost:3000`;

  constructor(private _http: HttpClient) {}

  loginUser(user: string, password: string) {
    return this._http.get<any>(
      `${this.api}/login?user=${user}&password=${password}`
    );
  }

  getNotificaction(): Observable<Notification[]> {
    return this._http.get<Notification[]>(`${this.api}/notification
    `);
  }

  getTask(): Observable<Task[]> {
    return this._http.get<Task[]>(`${this.api}/todos
    `);
  }

  getRols(): Observable<Rol[]> {
    return this._http.get<Rol[]>(`${this.api}/rols
    `);
  }

  // TODO: API’s Dashboard

  getTopCharts() {
    return this._http.get<any>(`${this.api}/dashboard_cards
      `);
  }

  getSeerverDetails(): Observable<Server> {
    return this._http.get<Server>(`${this.api}/cpu_report
      `);
  }

  getCommitsReports(): Observable<Commit[]> {
    return this._http.get<Commit[]>(`${this.api}/report_commits
      `);
  }

  getDeliveryReports() {
    return this._http.get<DeliveryReport>(`${this.api}/release_resume
      `);
  }
}