import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Shorten } from './shorten.model';
import { Observable } from 'rxjs';

@Injectable()
export class StorageService {
  constructor(private http: Http, private authService: AuthService) {}

  setUrls(shortenUrlList: any) {
    const token = this.authService.getToken();
    return this.http.put(
      'https://teenyurl-app.firebaseio.com/shortenurls.json?auth=' + token,
      shortenUrlList
    );
  }

  getUrls(): any {
    const token = this.authService.getToken();
    this.http
      .get('https://teenyurl-app.firebaseio.com/shortenurls.json?auth=' + token)
      .subscribe((response: Response) => {
        const shorten: Shorten[] = response.json();
        return shorten;
      });
  }
}
