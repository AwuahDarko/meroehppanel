import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsDetailsRoutingModule } from './tenants-details-routing.module';
import { TenantsDetailsComponent } from './tenants-details.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@NgModule({
  declarations: [TenantsDetailsComponent],
  imports: [CommonModule, TenantsDetailsRoutingModule, SidebarModule],
})
export class TenantsDetailsModule {}
