import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    return this.http
      .post(`http://localhost:8080/users/login`, {
        email: email,
        password: password
      });
  }

  public register(email: string, firstname: string, lastname: string, password: string): Observable<any> {
    return this.http
      .post(`http://localhost:8080/users`, {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password
      });
  }

  public getUser(email: string){
    return this.http
      .get(`http://localhost:8080/users/${email}`);
  }
}
