import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResponseTopHeadlines } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get<ResponseTopHeadlines>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=978764b3fe6b412f8517a7d9c0a1e140`
    );
  }
}
