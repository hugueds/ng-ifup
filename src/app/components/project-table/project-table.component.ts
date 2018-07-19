import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ProjectService } from '../../shared/services/project.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Project } from '../../shared/models/project';
import { Utils } from '../../shared/scripts/utils';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css'],
  providers: [ProjectService, HttpClient],
})


export class ProjectTableComponent implements OnInit {

  projects: Project[];
  dataSource: MatTableDataSource<Project>;
  displayedColumns: string[] = ['id', 'functionArea', 'project', 'activity', 'projectStatus', 'projectPercent', 'handover', 'calendar', 'details'];

  constructor(private _projectService: ProjectService) {
    this._projectService.getAll().subscribe((pjs: Project[]) => {
      const projects = pjs.map((p) => Utils.toCamel(p));
      this.projects = projects;
      this.dataSource = new MatTableDataSource<Project>(this.projects);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

}
