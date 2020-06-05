import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiCodeModule } from '@kikstart-ui/ui-code'
import { UiRenderModule } from '@kikstart-ui/ui-render'
import { TabsModule } from 'ngx-bootstrap/tabs'

import { DemoComponent } from './demo.component'

@NgModule({
  declarations: [DemoComponent],
  exports: [CommonModule, DemoComponent],
  imports: [CommonModule, UiCardModule, UiRenderModule, UiCodeModule, LayoutConsoleModule, TabsModule.forRoot()],
})
export class DemoSharedModule {}
