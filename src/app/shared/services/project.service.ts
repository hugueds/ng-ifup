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
    const url = this.endPoint + '/' + projectId;
    return this._http.get<Project>(url);
  }

  create(project: Project): Observable<Project> {
    const url = this.endPoint + '/create-many';
    return this._http.post<Project>(this.endPoint, project);
  }

  createMany(projects: Project[]): Observable<Project[]> {
    return this._http.post<Project[]>(this.endPoint, projects);
  }

  update(project: Project): Observable<Project> {
    const url = this.endPoint + '/update';
    return this._http.post<Project>(url, project);
  }

  generateEndPoint(): string {
    return environment.server + '/ltsapi/api/dashboard';
  }


}
