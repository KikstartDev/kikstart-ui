import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { UiIconModule } from '@kikstart-ui/ui-icon'

import { AppLayoutComponent } from './app-layout.component'
import { AppComponent } from './app.component'

import { routes } from './app.routes'

@NgModule({
  declarations: [AppComponent, AppLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    LayoutConsoleModule,
    UiIconModule,
    UiHeroModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
