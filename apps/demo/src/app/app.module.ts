import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { routes } from './app.routes'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
