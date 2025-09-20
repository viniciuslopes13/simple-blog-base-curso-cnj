import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url_base: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient){}

  findAll(): Observable <Post[]> {
    return this.httpClient.get<Post[]>(`${this.url_base}/posts`);
  }

  createPost(post: Post): Observable<void> {
    return this.httpClient.post<void>(`${this.url_base}/posts`, post);
  }

  updatePost(post: Post): Observable<void> {
    return this.httpClient.put<void>(`${this.url_base}/posts/${post.id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url_base}/posts/${id}`);
  }

  findPostById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url_base}/posts/${id}`);
  }

}
