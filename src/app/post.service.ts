import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { IPost } from './shared/interfaces/post';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  loadPostList(limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(apiUrl + `/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
