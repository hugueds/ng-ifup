import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProjectStatus } from '../models/ProjectStatus';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/shared/models/project';

export interface ProjectAndStatus {
  project: Project;
  projectStatus: ProjectStatus;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectStatusService {

  server = environment.server;
  private _api = '/project-status';

  get endPoint() {
    return this.server + this._api;
  }

  private projectStatusSource = new Subject<ProjectStatus[]>();
  projectStatus = this.projectStatusSource.asObservable();

  constructor(private _http: HttpClient) {

  }

  updateProjectStatusList(projectStatus: ProjectStatus[]) {
    this.projectStatusSource.next(projectStatus);
  }

  getAll(): Observable<ProjectStatus[]> {
    return this._http.get<ProjectStatus[]>(this.endPoint).pipe(map(res => res));
  }

  getById(projectStatusId: number): Observable<ProjectStatus> {
    const url = this.endPoint + '/' + projectStatusId;
    return this._http.get<ProjectStatus>(url).pipe(map(res => res));
  }

  getByUser(user: string, isResponsible?: boolean): Observable<ProjectAndStatus[]> {
    const url = `${this.endPoint}/user/${user}`;
    return this._http.get<ProjectAndStatus[]>(url).pipe(map(res => res));
  }

  getByUserResponsability(user: string, isResponsible?: boolean): Observable<ProjectAndStatus[]> {
    let url = `${this.endPoint}/user/${user}`;
    url = isResponsible ? `${url}?isResponsible=true` : `${url}?isResposible=false`;
    return this._http.get<ProjectAndStatus[]>(url).pipe(map(res => res));
  }

  create(projectStatus: ProjectStatus): Observable<ProjectStatus> {
    const url = this.endPoint + '/create-many';
    return this._http.post<ProjectStatus>(this.endPoint, projectStatus).pipe(map(res => res));
  }

  createMany(projectStatus: ProjectStatus[]): Observable<ProjectStatus[]> {
    return this._http.post<ProjectStatus[]>(this.endPoint, projectStatus).pipe(map(res => res));
  }

  update(projectStatus: ProjectStatus): Observable<ProjectStatus> {
    const url = this.endPoint + '/update';
    return this._http.post<ProjectStatus>(url, projectStatus).pipe(map(res => res));
  }

  delete(projectStatus: ProjectStatus): Observable<ProjectStatus> {
    const url = this.endPoint;
    return this._http.delete<ProjectStatus>(url).pipe(map(res => res));
  }



}
