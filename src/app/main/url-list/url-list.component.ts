import { Component, OnInit } from '@angular/core';
import { ShortenService } from 'src/app/services/shorten.service';
import { Subscription } from 'rxjs';
import { Shorten } from 'src/app/services/shorten.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss'],
})
export class UrlListComponent implements OnInit {
  urlList: Shorten[];
  subscription: Subscription;

  constructor(
    private shortenUrlService: ShortenService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.subscription = this.shortenUrlService.shortenChanged.subscribe(
      (shortened: Shorten[]) => {
        this.urlList = shortened;
      }
    );
    this.urlList = this.storageService.getUrls();
  }
}
