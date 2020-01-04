import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponseTopHeadlines } from '../models/models';
import { environment } from 'src/environments/environment';

const apiAkey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
    'X-Api-Key': apiAkey,
});

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    headLinesPage = 0;

    constructor(private http: HttpClient) {}

    private startQuery<T>(query: string) {
        query = apiUrl + query;
        return this.http.get<T>(query, { headers });
    }

    getTopHeadLines() {
        this.headLinesPage++;
        // Tipificar la respuesta
        //
        return this.startQuery<ResponseTopHeadlines>(
            `/top-headlines?country=us&page=${this.headLinesPage}`,
        );
    }

    getTopHeadLinesCategory(category: string) {
        return this.startQuery<ResponseTopHeadlines>(
            `/top-headlines?country=us&category=${category}`,
        );
    }
}
