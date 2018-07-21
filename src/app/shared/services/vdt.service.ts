import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { VDTActivity } from '../models/VDTActivity';


@Injectable({
  providedIn: 'root'
})
export class VdtService {

  constructor(private _http: HttpClient) {

  }

  getAll(): Observable<VDTActivity[]> {
    return this._http.get<VDTActivity[]>('');
  }

  getById(id: number): Observable<VDTActivity> {
    return this._http.get<VDTActivity>('');
  }

  create() {

  }

  update() {

  }

  delete() {

  }



}
