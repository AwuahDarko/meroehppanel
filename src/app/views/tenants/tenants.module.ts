import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { SnackbarModule } from 'ngx-snackbar';
// "node_modules/ngx-snackbar/bundles/style.css"
import { HeaderModule } from '../../components/header/header.module';
@NgModule({
  declarations: [TenantsComponent],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    SnackbarModule.forRoot(),
    FormsModule,
    HeaderModule,
  ],
})
export class TenantsModule {}
