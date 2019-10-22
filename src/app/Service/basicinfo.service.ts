import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BasicinfoService {

  url = `${env.api}Basicinfo/`;
  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get(this.url);
  }

  GetAllById(id) {
    return this.http.get(this.url + id);
  }

  Create(body): Observable<any> {
    return this.http.post(this.url, body);
  }

  Update(body, id) {
    this.http.put(`${this.url}${id}`, body)
      .subscribe(res => console.log('Updated. ID: ' + id));
  }

  Delete(id) {
    return this.http.delete(this.url + id)
      .subscribe(res => console.log('Deleted. ID: ' + id));
  }
}
