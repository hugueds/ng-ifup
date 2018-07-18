import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private api = '/api/';
  private endPoint: string;

  constructor(private _http: HttpClient) {
    this.endPoint = this.generateEndPoint();
  }

  getAll(): Observable<Project[]> {
    return this._http.get<Project[]>(this.endPoint);
  }

  getById(projectId: number): Observable<Project> {
    return this._http.get<Project>(this.endPoint + '/' + projectId);
  }

  create() {

  }

  createMany() {

  }

  generateEndPoint(): string {
    return environment.server + '/ltsapi/api/dashboard';
  }


}
