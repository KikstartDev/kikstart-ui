import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'console' },
        {
          path: 'console',
          loadChildren: () => import('./console/console.module').then((m) => m.ConsoleModule),
        },
      ],
      { initialNavigation: 'enabled' },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
