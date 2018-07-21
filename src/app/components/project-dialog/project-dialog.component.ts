import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../../shared/models/project';


@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  private _project: Project;

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public project: Project) {
    this._project = project;
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
