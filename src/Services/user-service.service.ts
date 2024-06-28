import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private readonly BaseURL: string = "https://jsonplaceholder.typicode.com/users"



  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.BaseURL)

  }
}

