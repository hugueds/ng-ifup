import { Component, OnInit } from '@angular/core';
import { ProjectStatus } from '../../shared/models/ProjectStatus';
import { ProjectStatusService } from '../../shared/services/project-status.service';

@Component({
  selector: 'app-responsible-container',
  templateUrl: './responsible-container.component.html',
  styleUrls: ['./responsible-container.component.css'],
  providers: [ProjectStatusService]
})
export class ResponsibleContainerComponent implements OnInit {

  people = ['SSBHPE', 'SSBUIF', 'SSBROX'];
  regularDistribution = 100 / 3;

  fakeArray = new Array(27);

  projectStatus: ProjectStatus[];
  loading = true;

  constructor(private _pjStatusService: ProjectStatusService) {

  }

  ngOnInit() {

  }

}
