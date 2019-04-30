import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UrlCreateComponent } from './url-create/url-create.component';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule({
  declarations: [UrlCreateComponent, UrlListComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [],
})
export class MainModule {}
