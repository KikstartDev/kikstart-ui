import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { DemoLayoutDocsComponent } from './demo-layout-docs.component'

@NgModule({
  declarations: [DemoLayoutDocsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DemoLayoutDocsComponent,
      },
    ]),
    LayoutConsoleModule,
    UiHeroModule,
  ],
})
export class DemoLayoutDocsModule {}
