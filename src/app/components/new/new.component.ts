import { Component, OnInit, Input } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { Article } from 'src/app/models/models';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
    @Input() new: Article;
    @Input() index: number;

    constructor(
        private iab: InAppBrowser,
        private actionSheetCtrl: ActionSheetController,
        private socialSharing: SocialSharing,
        public dataLocalSrv: DataLocalService,
    ) {}

    ngOnInit() {}

    openNewBrower() {
        const browser = this.iab.create(this.new.url, '_system');
    }

    async startMenu() {
        const actionSheet = await this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share',
                    icon: 'share',
                    handler: () => {
                        this.socialSharing.share(
                            this.new.title, // noticia
                            this.new.source.name, // autor
                            '', // file
                            this.new.url,
                        );
                    },
                },
                {
                    text: 'Favorite',
                    icon: 'heart',
                    handler: () => {
                        console.log('Favorite');
                        this.dataLocalSrv.saveNew(this.new);
                    },
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                },
            ],
        });
        await actionSheet.present();
    }
}
