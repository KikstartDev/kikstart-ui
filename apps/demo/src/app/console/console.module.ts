import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'

import { routes } from './console-routing.module'
import { ConsoleComponent } from './console.component'

@NgModule({
  declarations: [ConsoleComponent],
  imports: [CommonModule, LayoutConsoleModule, RouterModule.forChild(routes)],
})
export class ConsoleModule {}
