import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SnackbarModule } from 'ngx-snackbar';
// "node_modules/ngx-snackbar/bundles/style.css"
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SnackbarModule],
})
export class LoginModule {}
