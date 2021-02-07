import { Component, OnInit } from '@angular/core'

import { NewsService } from 'src/app/services/news.service'
import { Article } from 'src/app/models/models'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  news: Article[] = []

  constructor(private newsSrc: NewsService) {}

  ngOnInit() {
    this.loadNews()
  }

  loadData(ev) {
    this.loadNews(ev)
  }

  loadNews(ev?) {
    this.newsSrc.getTopHeadLines().subscribe(resp => {
      const respTopHead = JSON.parse(resp.contents)
      if (respTopHead.articles.length === 0) {
        ev.target.disabled = true
        ev.target.complete()
        return
      }
      this.news.push(...respTopHead.articles)

      if (ev) {
        ev.target.complete()
      }
    })
  }
}
