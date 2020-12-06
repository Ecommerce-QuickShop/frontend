import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri='http://localhost:8080';
  constructor(private http: HttpClient) { }
  addUser(first_name,last_name, email,phone_number,username,password,role,avatar_mine){
    const obj={
     
      first_name,
      last_name,
      email,
      phone_number,
      username,
      password,
      role,
      avatar_mine
    };
    console.log(obj);

    this.http.post(`${this.uri}/register`,(obj))
    .subscribe(res=>console.log('Done'));
  }

  
}
