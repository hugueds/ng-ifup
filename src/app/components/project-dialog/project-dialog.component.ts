import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Project } from '../../shared/models/project';
import { Constants } from '../../shared/data/constants';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  private _project: Project;
  constants: any;

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public project: Project
    , private _projectService: ProjectService ) {
    this.constants = Constants;
    this._project = project;
  }

  ngOnInit() {

  }

  save(project: Project) {
    this._projectService.update(project);
  }

  edit(project: Project) {

  }

  close(): void {
    this.dialogRef.close();
  }

}
