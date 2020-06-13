import { DemoHelper } from '../../demo.helper'

import { ThemesColorsDemoComponent } from './themes-colors-demo.component'

export const components = [ThemesColorsDemoComponent]

export const config = {
  title: 'Colors',
  demos: [
    DemoHelper.config({
      title: 'Colors',
      description: `The \`@kikstart-ui/themes\` package includes the Material colors defined in [@material/theme](https://npm.im/@material/theme)

Each color has a <code>bg-</code>, <code>border-</code> and  <code>text-</code> class.
`,
      component: ThemesColorsDemoComponent,
      path: 'demos/themes-colors',
      files: ['themes-colors-demo.component.html', 'themes-colors-demo.component.ts'],
    }),
  ],
}
