import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
    @ViewChild(IonSegment, { static: true }) segment: IonSegment;

    categorys = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
    ];

    constructor(private newSrv: NewsService) {}

    ngOnInit() {
        this.segment.value = this.categorys[0];
        this.newSrv
            .getTopHeadLinesCategory(this.categorys[0])
            .subscribe(resp => {
                console.log(resp);
            });
    }
}
