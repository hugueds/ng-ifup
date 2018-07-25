import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from 'src/app/shared/models/project';
import { ProjectService } from '../../shared/services/project.service';
import { Constants } from '../../shared/data/constants';

@Component({
  selector: 'app-create-project-container',
  templateUrl: './create-project-container.component.html',
  styleUrls: ['./create-project-container.component.css']
})
export class CreateProjectContainerComponent implements OnInit {

  project: Project;
  constants: any;

  constructor(private _projectService: ProjectService) {
    this.constants = Constants;
  }

  ngOnInit() {
    this.project = new Project();
  }

  save(project: Project) {
    // this._projectService.create(project);
  }

}
