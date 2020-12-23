import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        canActivate: [AuthGuard],
        path: 'tenants',
        loadChildren: () =>
          import('./tenants/tenants.module').then(
            (module) => module.TenantsModule
          ),
      },
      {
        canActivate: [AuthGuard],
        path: 'tenants-detail',
        loadChildren: () =>
          import('./tenants-details/tenants-details.module').then(
            (module) => module.TenantsDetailsModule
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((module) => module.LoginModule),
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
