import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HeaderModule } from '../components/header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, ViewsRoutingModule, HeaderModule, RouterModule],
})
export class ViewsModule {}
