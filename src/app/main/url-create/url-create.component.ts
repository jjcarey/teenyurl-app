import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { ShortenService } from 'src/app/services/shorten.service';
import { Shorten } from 'src/app/services/shorten.model';

@Component({
  selector: 'app-url-create',
  templateUrl: './url-create.component.html',
  styleUrls: ['./url-create.component.scss'],
})
export class UrlCreateComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private shortenUrlService: ShortenService
  ) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    const value = form.value;
    const shortenedItem: Shorten[] = [value.urlString, 'http://go.co', 0];
    form.reset();

    this.shortenUrlService.addShortenedUrl(shortenedItem);
    this.storageService
      .setUrls(this.shortenUrlService.getShortenedUrls())
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
