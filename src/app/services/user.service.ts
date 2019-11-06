import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../Models/UserModel';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string;
  constructor( private http: HttpClient) {
    this.apiUrl = environment.apiendpoint;
  }

  getUserName(): string {
    return 'orlando.barria';
  }


  getUserAPI() {
     this.http.get(this.apiUrl + 'api/User/555')
     .subscribe(resp => {
       console.log(resp);
     });
  }

  getUsersAPI() {
    return this.http.get(this.apiUrl + 'api/User/Users');
 }


  addUserAPI( user: User) {
    this.http.post(this.apiUrl + 'api/User/AddUser', user)
    .subscribe(resp => {
      console.log(resp + ' test ...');
    });

  }


}
