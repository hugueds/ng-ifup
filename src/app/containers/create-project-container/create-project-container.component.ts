import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-create-project-container',
  templateUrl: './create-project-container.component.html',
  styleUrls: ['./create-project-container.component.css']
})
export class CreateProjectContainerComponent implements OnInit {

  project: Project;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.project = new Project();
  }

  save() {

  }

}
