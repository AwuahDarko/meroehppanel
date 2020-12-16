import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsDetailsRoutingModule } from './tenants-details-routing.module';
import { TenantsDetailsComponent } from './tenants-details.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { SnackbarModule } from 'ngx-snackbar';
// "node_modules/ngx-snackbar/bundles/style.css"

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
@NgModule({
  declarations: [TenantsDetailsComponent],
  imports: [
    CommonModule,
    TenantsDetailsRoutingModule,
    SidebarModule,
    SnackbarModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'info', // set defaults here
    }),
  ],
})
export class TenantsDetailsModule {}
