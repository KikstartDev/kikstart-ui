export const routes = [
  { path: '', pathMatch: 'full', redirectTo: 'console' },
  { path: 'console', loadChildren: () => import('./console/console.module').then((m) => m.ConsoleModule) },
]
