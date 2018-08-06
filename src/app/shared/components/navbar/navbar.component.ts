import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../../../components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog() {
    const loginRef = this._dialog.open(LoginDialogComponent, {
      height: '300px'
    });
  }

}
