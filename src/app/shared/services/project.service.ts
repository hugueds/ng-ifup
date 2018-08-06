import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Project } from '../models/project';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private api = '/api/';
  private endPoint: string;

  private projectSource = new Subject<Project[]>();
  projects = this.projectSource.asObservable();

  constructor(private _http: HttpClient) {
    this.endPoint = this.generateEndPoint();
  }

  updateProjectList(projects: Project[]) {
    this.projectSource.next(projects);
  }

  getAll(): Observable<Project[]> {
    return this._http.get<Project[]>(this.endPoint).pipe(map(res => res));
  }

  getById(projectId: number): Observable<Project> {
    const url = this.endPoint + '/' + projectId;
    return this._http.get<Project>(url).pipe(map(res => res));
  }

  create(project: Project): Observable<Project> {
    const url = this.endPoint + '/create-many';
    return this._http.post<Project>(this.endPoint, project).pipe(map(res => res));
  }

  createMany(projects: Project[]): Observable<Project[]> {
    return this._http.post<Project[]>(this.endPoint, projects).pipe(map(res => res));
  }

  update(project: Project): Observable<Project> {
    const url = this.endPoint + '/update';
    return this._http.post<Project>(url, project).pipe(map(res => res));
  }

  private generateEndPoint(): string {
    return environment.server + '/ltsapi/api/dashboard';
  }


}
