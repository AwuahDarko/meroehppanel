import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/views.module').then((module) => module.ViewsModule),
      },
      // {
      //   path: 'maintenance',
      //   loadChildren: () =>
      //     import('./demo/pages/maintenance/maintenance.module').then(
      //       (module) => module.MaintenanceModule
      //     ),
      // },
    ],
  },

  // {
  //   path: 'support',
  //   loadChildren: () =>
  //     import('./support/support.module').then((module) => module.SupportModule),
  // },

  { path: '**', redirectTo: '/demo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
