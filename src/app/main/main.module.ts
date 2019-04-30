import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UrlCreateComponent } from './url-create/url-create.component';
import { UrlListComponent } from './url-list/url-list.component';
import { AuthService } from '../auth/auth.service';
import { ShortenService } from '../services/shorten.service';
import { StorageService } from '../services/storage.service';

@NgModule({
  declarations: [UrlCreateComponent, UrlListComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [UrlCreateComponent, UrlListComponent],
  providers: [AuthService, ShortenService, StorageService],
})
export class MainModule {}
