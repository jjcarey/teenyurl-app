import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [FormsModule, RouterModule, AuthRoutingModule],
})
export class AuthModule {}
