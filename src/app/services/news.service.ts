import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { ResponseTopHeadlines } from '../models/models'
import { environment } from 'src/environments/environment'

const apiAkey = environment.apiKey
const apiUrl = environment.apiUrl

const headers = new HttpHeaders({
  'X-Api-Key': apiAkey,
})

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  headLinesPage = 0

  categoryAct = ''
  categoryPg = 0

  constructor(private http: HttpClient) {}

  private startQuery<T>(query: string) {
    query = apiUrl + query + `&apiKey=${apiAkey}`
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(query)}`
    return this.http.get<T>(url)
  }

  getTopHeadLines() {
    this.headLinesPage++
    // ! Type the answer
    return this.startQuery<ResponseTopHeadlines>(`/top-headlines?country=us&page=${this.headLinesPage}`)
  }

  getTopHeadLinesCategory(category: string) {
    if (this.categoryAct === category) {
      this.categoryPg++
    } else {
      this.categoryPg = 1
      this.categoryAct = category
    }
    return this.startQuery<ResponseTopHeadlines>(
      `/top-headlines?country=us&category=${category}&page=${this.categoryPg}`
    )
  }
}
