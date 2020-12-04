import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { DataCardModule } from '../../components/data-card/data-card.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, SidebarModule, DataCardModule],
})
export class DemoModule {}
