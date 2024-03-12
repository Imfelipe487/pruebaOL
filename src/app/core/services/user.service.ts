import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private api = `http://localhost:3000`;

  constructor(private _http: HttpClient) {}

  loginUser(user: string, password: string) {
    return this._http.get<any>(
      `${this.api}/login?user=${user}&password=${password}`
    );
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.api}/users`);
  }

  createUser(user: User): Observable<User> {
    return this._http.post<User>(`${this.api}/users`, user);
  }

  updateUsers(id: string, user: User): Observable<User> {
    return this._http.put<User>(`${this.api}/users/${id}`, user);
  }

  deleteUsers(id: string): Observable<User> {
    return this._http.delete<User>(`${this.api}/users/${id}`, {});
  }
}