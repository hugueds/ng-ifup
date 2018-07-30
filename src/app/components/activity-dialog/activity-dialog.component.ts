import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.css']
})
export class ActivityDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActivityDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public activities: any
    , private _dialog: MatDialog

  ) { }

  ngOnInit() {
  }

  save() {

  }

  openProject(projectId: number) {
    const project = new Project();
    this._dialog.open(ProjectDialogComponent, {
      data: project
    });

  }

}
