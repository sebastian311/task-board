import { Route } from '@angular/router';
import { DashboardShellComponent } from './feature-components/dashboard-component/dashboard-component.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardShellComponent, // Home
    children: [
      {
        path: 'Backoffice',
        loadChildren: () =>
          import('Backoffice/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'Authentication',
        loadChildren: () =>
          import('Authentication/Routes').then((m) => m!.remoteRoutes),
      }
    ]
  },
  {
    // For invalid paths, redirect to DashboardShellComponent
    path: '**',
    redirectTo: ''
  }
];
