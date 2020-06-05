import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UiLabelModule } from '@kikstart-ui/ui-label'

import { UiLinkComponent } from './ui-link.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLabelModule],
  declarations: [UiLinkComponent],
  exports: [UiLinkComponent],
})
export class UiLinkModule {}
