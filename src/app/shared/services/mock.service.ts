import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  dataFolder = '../../../data/';

  constructor(private _http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(this.dataFolder + 'projects.json');
  }

  getVDT() {
    return;
  }

}
