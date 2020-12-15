import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsDetailsComponent } from './tenants-details.component';

const routes: Routes = [
  {
    path: '',
    component: TenantsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantsDetailsRoutingModule {}
