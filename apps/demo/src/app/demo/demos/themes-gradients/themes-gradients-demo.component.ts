import { Component } from '@angular/core'
import { getFavorites, getGradients } from '@kikstart-ui/themes'

@Component({
  templateUrl: './themes-gradients-demo.component.html',
})
export class ThemesGradientsDemoComponent {
  public favorites = getFavorites()
  public gradients = getGradients()
}
