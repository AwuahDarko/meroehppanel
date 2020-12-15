import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demo',
        loadChildren: () =>
          import('./demo/demo.module').then((module) => module.DemoModule),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'tenants',
        loadChildren: () =>
          import('./tenants/tenants.module').then(
            (module) => module.TenantsModule
          ),
      },
      {
        path: 'tenants-detail',
        loadChildren: () =>
          import('./tenants-details/tenants-details.module').then(
            (module) => module.TenantsDetailsModule
          ),
      },
    ],
  },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'tenants',
  //       loadChildren: () =>
  //         import('./tenants/tenants.module').then(
  //           (module) => module.TenantsModule
  //         ),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
