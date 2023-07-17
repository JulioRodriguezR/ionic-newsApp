import { Component, ViewChild, OnInit } from '@angular/core'
import { IonSegment } from '@ionic/angular'
import { NewsService } from 'src/app/services/news.service'
import { Article } from 'src/app/models/models'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  categories = [
    'business', 
    'entertainment', 
    'general', 
    'health', 
    'science', 
    'sports', 
    'technology'
  ];
  news: Article[] = [];
  selectedCategory: string;

  constructor(private newSrv: NewsService) {}

  ngOnInit() {
    this.loadNews(this.categories[0]);
    this.selectedCategory = this.categories[0]; 
  }

  changeCategory(ev) {
    this.news = [];
    this.loadNews(ev.detail.value);
  }

  loadNews(category: string, ev?) {
    this.newSrv.getTopHeadLinesCategory(category).subscribe(resp => {
      const respTopHead = JSON.parse(resp.contents);
      this.news.push(...respTopHead.articles);
      if (ev) {
        ev.target.complete();
      }
    })
  }

  loadData(ev: number) {
    const segmentData: string = this.segment.value.toString();
    this.loadNews(segmentData, ev);
  }
}
