import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Article } from '../models/models';

@Injectable({
    providedIn: 'root',
})
export class DataLocalService {
    news: Article[] = [];

    constructor(private storage: Storage) {}

    saveNew(evNew: Article) {
        const exists = this.news.find(i => i.title === evNew.title);
        if (!exists) {
            this.news.unshift(evNew);
            this.storage.set('favorites', this.news);
        }
    }

    loadFavorites() {}
}
