import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {

  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getCommentsByPostId(id): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
  createPost(post) {
    const headers = new HttpHeaders();
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post, { headers });
  }
}
