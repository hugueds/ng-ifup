import { Component, OnInit } from '@angular/core';
import { LoginService, Login } from '../../shared/services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  login: Login;

  constructor(private _loginService: LoginService) {

  }

  ngOnInit() {
    this.login = {
      user: '',
      pass: ''
    };
  }

  send(login: Login) {
    this._loginService.autenticate(login).subscribe(data => {
      if (data) {
        console.log('Aceito');
      } else {
        console.log('Rejeitado');
      }
    });
  }

}
