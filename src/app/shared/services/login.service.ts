import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  autenticate({user, password}): Observable<any> {
    return this._http.post('', user);
  }

  private login() {
    console.log(123);
  }

  logoff() {
    sessionStorage.removeItem('user');
  }


}
