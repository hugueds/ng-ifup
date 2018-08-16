import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityDialogComponent } from '../activity-dialog/activity-dialog.component';
import { ProjectStatusService, ProjectAndStatus } from '../../shared/services/project-status.service';

@Component({
  selector: 'app-responsible-card',
  templateUrl: './responsible-card.component.html',
  styleUrls: ['./responsible-card.component.css']
})
export class ResponsibleCardComponent implements OnInit {

  @Input() person: string;

  private _imagesFolder = '/assets/images/colaboradores/';

  get imageSrc() {
    return 'http://' + location.host + this._imagesFolder + this.person + '.jpg';
  }

  constructor(private _dialog: MatDialog, private _psService: ProjectStatusService) {
  }

  ngOnInit() {
  }

  open(activityType: number) {
    const isResposible = activityType === 1 ? true : false;
    this._psService.getByUser(this.person, isResposible).subscribe(ps => {
      const dialogRef = this._dialog.open(ActivityDialogComponent,
        { data: ps }
      );
    });
  }

  close() {

  }

}
