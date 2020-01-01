import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorys = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor() { }

}
