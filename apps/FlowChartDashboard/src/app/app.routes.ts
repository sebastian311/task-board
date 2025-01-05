import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
];
