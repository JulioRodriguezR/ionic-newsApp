import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

import { DataLocalService } from 'src/app/services/data-local.service';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
    @ViewChild('swiperRef', { static: false })
        protected _swiperRef: ElementRef | undefined
    swiper?: Swiper

    infinitLoad: any;
    
    constructor(public dataLocalSrv: DataLocalService) { }

    ngAfterViewInit() {
        this._initSwiper();
    }

    private _initSwiper() {
        const swiperOpts: SwiperOptions = {
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
            loop: true
        };

        const swiperEl = this._swiperRef.nativeElement;
        Object.assign(swiperEl, swiperOpts);

        swiperEl.initialize()

        if (this.swiper) this.swiper.currentBreakpoint = false // Breakpoint fixes
        this.swiper = this._swiperRef.nativeElement.swiper

        this.swiper.off('slideChange') // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time

        this.swiper.on('slideChange', () => { // Any change subscription you wish
            this.infinitLoad?.triggerOnScroll()
        });
    }
}
