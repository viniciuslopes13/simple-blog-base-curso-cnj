import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url_base: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient){}

  findAll(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url_base}/posts`)
      .toPromise()
      .then((response) => { return response; })
      .catch((error) => { return error; });
  }

  createPost(post: Post): Promise<void> {
    return this.httpClient.post(`${this.url_base}/posts`, post)
      .toPromise()
      .then((response) => { return response; })
      .catch((error) => { return error; });
  }

  updatePost(post: Post): Promise<void> {
    return this.httpClient.put(`${this.url_base}/posts/${post.id}`, post)
      .toPromise()
      .then((response) => { return response; })
      .catch((error) => { return error; });
  }

  deletePost(id: string): Promise<void> {
    return this.httpClient.delete(`${this.url_base}/posts/${id}`)
      .toPromise()
      .then((response) => { return response; })
      .catch((error) => { return error; });
  }

  findPostById(id: string): Promise<Post> {
    return this.httpClient.get<Post>(`${this.url_base}/posts/${id}`)
      .toPromise()
      .then((response) => { return response; })
      .catch((error) => { return error; });
  }

}
