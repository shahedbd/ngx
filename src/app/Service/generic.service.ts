import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GenericService {
  apiName: string;
  baseurl = env.api;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseurl + this.apiName);
  }

  getById(id) {
    return this.http.get(this.baseurl + this.apiName + '/' + id);
  }

  createNew(body): Observable<any> {
    // console.log(this.apiName);
    // console.log(this.baseurl + this.apiName);
    return this.http.post(this.baseurl + this.apiName, body);
  }

  update(id, body) {
    this.http.put(`${this.baseurl + this.apiName}/${id}`, body)
      .subscribe(res => console.log('Updated. ID: ' + id));
  }

  deleteById(id) {
    return this.http.delete(this.baseurl + this.apiName + '/' + id)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }
}



