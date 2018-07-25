import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Login {
  user: string;
  pass: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginServer = 'http://10.8.66.4:5001/AdSvc/Service1.svc/ValidateUser';

  logged: boolean;
  user: string;
  sessionId: string;

  constructor(private _http: HttpClient) { }

  autenticate(login: Login): Observable<boolean> {
    return this._http.post(this.loginServer, login).pipe(
      map(res => {
        return this.validate(login, res);
      })
    );
  }

  private validate(login: Login, response: any): boolean {
    this.logged = false;
    if (response['ValidateUserResult'] === 'Ok') {
      this.logged = true;
      sessionStorage.setItem('user', login.user);
      sessionStorage.setItem('sessionId', new Date() + login.user);
      sessionStorage.setItem('logged', 'true');
    }
    return this.logged;
  }


  logoff() {
    this.logged = false;
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('sessionId');
    sessionStorage.setItem('logged', 'false');
  }


}
