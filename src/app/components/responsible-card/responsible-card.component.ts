import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityDialogComponent } from '../activity-dialog/activity-dialog.component';

@Component({
  selector: 'app-responsible-card',
  templateUrl: './responsible-card.component.html',
  styleUrls: ['./responsible-card.component.css']
})
export class ResponsibleCardComponent implements OnInit {

  @Input() person: string;

  private _imagesFolder = '/assets/images/colaboradores/';
  imageSrc: string;

  constructor(private _dialog: MatDialog) {
  }

  ngOnInit() {
    this.imageSrc = 'http://' + location.host + this._imagesFolder + this.person + '.jpg';
  }

  open(activityType: string) {
    let data;
    switch (activityType) {
      case 'resp':
        data = 1;
        break;
      case 'invol':
        data = 2;
        break;
    }
    const dialogRed = this._dialog.open(ActivityDialogComponent,
      { data: data }
    );
    console.log(data);
  }

  close() {

  }

}
