import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { Project } from '../../shared/models/project';
import { ProjectStatusService, ProjectAndStatus } from '../../shared/services/project-status.service';
import { ProjectStatus } from '../../shared/models/ProjectStatus';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.css']
})
export class ActivityDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActivityDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pjStatus: ProjectAndStatus
    , private _dialog: MatDialog
    , private _projectService: ProjectService

  ) { }

  ngOnInit() {
  }

  save() {

  }

  openProject(projectId: number) {
    this._projectService.getById(projectId).subscribe(p => {
      this._dialog.open(ProjectDialogComponent, {
        data: p
      });
    });
  }
}
