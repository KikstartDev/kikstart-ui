import { Routes } from '@angular/router'
import { AppLayoutComponent } from './app-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: () => import('./pages/home/app-home.module').then((m) => m.AppHomeModule) },
      {
        path: 'demos',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/app-not-found.module').then((m) => m.AppNotFoundModule),
  },
]
