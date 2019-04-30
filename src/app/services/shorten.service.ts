import { Injectable } from '@angular/core';

import { Shorten } from './shorten.model';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class ShortenService {
  shortenChanged = new Subject<Shorten[]>();

  private shortenedUrl: Shorten[] = [
    new Shorten('https://www.googl.....', 'http://local...', 0),
    new Shorten('https://www.googl.....', 'http://local...', 4),
  ];

  constructor(private storageService: StorageService) {}

  getShortenedUrls() {
    return this.shortenedUrl.slice();
  }

  setShortenedUrl(shortenedUrl: Shorten[]) {
    this.shortenedUrl = shortenedUrl;
    this.shortenChanged.next(this.shortenedUrl.slice());

    this.storageService.setUrls(this.shortenedUrl);
  }

  addShortenedUrl(shortenedUrl: any[]) {
    this.shortenedUrl.push({
      longUrl: shortenedUrl[0],
      shortUrl: shortenedUrl[1],
      hitCount: shortenedUrl[2],
    });
    this.shortenChanged.next(this.shortenedUrl.slice());

    this.storageService.setUrls(this.shortenedUrl);
  }
}
