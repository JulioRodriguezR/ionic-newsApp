import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Article } from '../models/models';

@Injectable({
    providedIn: 'root',
})
export class DataLocalService {
    news: Article[] = [];

    constructor(private storage: Storage) {
        this.loadFavorites();
    }

    saveNew(evNew: Article) {
        const exists = this.news.find(i => i.title === evNew.title);
        if (!exists) {
            this.news.unshift(evNew);
            this.storage.set('favorites', this.news);
        }
    }

    async loadFavorites() {
        const favorites = await this.storage.get('favorites');
        if (favorites) {
            this.news = favorites;
        }
    }

    deleteNew(evNew: Article) {
        this.news = this.news.filter(i => i.title !== evNew.title);
        this.storage.set('favorites', this.news); // lo que quede del []
    }
}
