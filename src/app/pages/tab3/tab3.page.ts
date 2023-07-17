import { Component } from '@angular/core';

import { DataLocalService } from 'src/app/services/data-local.service';
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
    constructor(public dataLocalSrv: DataLocalService) {}
}
