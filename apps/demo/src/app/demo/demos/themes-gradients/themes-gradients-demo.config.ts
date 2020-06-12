import { DemoHelper } from '../../demo.helper'

import { ThemesGradientsDemoComponent } from './themes-gradients-demo.component'

export const components = [ThemesGradientsDemoComponent]

export const config = {
  title: 'Gradients',
  demos: [
    DemoHelper.config({
      title: 'CSS Gradients',
      description:
        'The `@kikstart-ui/themes` package includes a slightly modified fork of [itmeo/webgradients](https://github.com/itmeo/webgradients)',
      component: ThemesGradientsDemoComponent,
      path: 'demos/themes-gradients',
      files: ['themes-gradients-demo.component.html', 'themes-gradients-demo.component.ts'],
    }),
  ],
}
