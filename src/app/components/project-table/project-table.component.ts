import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ProjectService } from '../../shared/services/project.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Project } from '../../shared/models/project';
import { Utils } from '../../shared/scripts/utils';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css'],
  providers: [ProjectService, HttpClient],
})


export class ProjectTableComponent implements OnInit {

  projects: Project[];
  dataSource: MatTableDataSource<Project>;
  displayedColumns: string[] = [
    'id', 'functionArea', 'project', 'activity', 'projectStatus', 'projectPercent', 'handover', 'calendar', 'details'
  ];

  constructor(private _projectService: ProjectService, public dialog: MatDialog) {
    this._projectService.getAll().subscribe((pjs: Project[]) => {
      this.projects  = pjs.map((p) => Utils.toCamel(p));
      this.dataSource = new MatTableDataSource<Project>(this.projects);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(project: Project): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      // width: '10em',
      // height: 'auto',
      data: project
    });
  }

  goToSchedule(projectId: number): void {
    location.href = '/schedule/' + projectId;
  }



}
