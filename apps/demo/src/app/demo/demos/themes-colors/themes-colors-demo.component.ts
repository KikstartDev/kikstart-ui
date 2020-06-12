import { Component, ElementRef, ViewChild } from '@angular/core'
import { getColors } from '@kikstart-ui/themes'

@Component({
  templateUrl: './themes-colors-demo.component.html',
})
export class ThemesColorsDemoComponent {
  @ViewChild('main') main: ElementRef<HTMLElement>
  public colors = getColors()
}
