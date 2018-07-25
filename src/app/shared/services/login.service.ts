import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private server: string;
  private endPoint: string;

  logged: boolean;
  user: string;
  sessionId: string;

  constructor(private _http: HttpClient) { }

  autenticate({ user, password }): Observable<any> {
    return this._http.post('', user);
  }

  private login() {
    console.log(123);
  }

  logoff() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('sessionId');
    sessionStorage.setItem('logged', 'false');
  }


}
