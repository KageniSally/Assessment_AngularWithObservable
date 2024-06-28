import { Injectable } from '@angular/core';
import { Post } from '../Models/posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private readonly BaseURL="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.BaseURL)

  }
}
