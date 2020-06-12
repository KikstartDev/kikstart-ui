import { DemoHelper } from '../../demo.helper'

import { ThemesColorsDemoComponent } from './themes-colors-demo.component'

export const components = [ThemesColorsDemoComponent]

export const config = {
  title: 'Colors',
  demos: [
    DemoHelper.config({
      title: 'Colors',
      description:
        'The `@kikstart-ui/themes` package includes a slightly modified fork of [clsmedia/flatuicolor.css](https://github.com/clsmedia/flatuicolor.css)',
      component: ThemesColorsDemoComponent,
      path: 'demos/themes-gradients',
      files: ['themes-gradients-demo.component.html', 'themes-gradients-demo.component.ts'],
    }),
  ],
}
