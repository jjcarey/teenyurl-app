import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Teeny Url';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrpSn-pOx5cOl6eZkEs0lt3fg0TF910h8',
      authDomain: 'teenyurl-app.firebaseapp.com',
    });
  }
}
