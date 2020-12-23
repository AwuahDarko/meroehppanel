import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { DataCardModule } from '../../components/data-card/data-card.module';
import { HeaderModule } from '../../components/header/header.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    DataCardModule,
    HeaderModule,
  ],
})
export class DashboardModule {}
