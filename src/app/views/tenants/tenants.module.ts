import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { SnackbarModule } from 'ngx-snackbar';

@NgModule({
  declarations: [TenantsComponent],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    SnackbarModule.forRoot(),
    FormsModule,
  ],
})
export class TenantsModule {}
