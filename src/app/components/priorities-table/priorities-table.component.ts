import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-priorities-table',
  templateUrl: './priorities-table.component.html',
  styleUrls: ['./priorities-table.component.css']
})
export class PrioritiesTableComponent implements OnInit {

  projects: Project[];
  dataSource: MatTableDataSource<Project>;
  displayedColumns: string[] = [
    'id', 'functionArea', 'project', 'activity', 'projectStatus', 'projectPercent', 'handover', 'calendar', 'details'
  ];

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

}
