import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() news: Article[] =[];

  constructor() { }

  ngOnInit() {}

}
