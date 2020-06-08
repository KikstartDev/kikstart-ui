import { Component } from '@angular/core'
import { LayoutConsoleHelper } from '@kikstart-ui/layout-console'

@Component({
  template: `
    <console-layout>
      <console-navbar [brand]="{ navbarClasses: 'navbar-dark bg-dark' }">
        <span class="right">
          <a routerLink="/" class="ml-2 p-0" *ngIf="user">
            <img
              [attr.src]="user?.avatarUrl"
              width="30"
              height="30"
              class="d-inline-block rounded-circle"
              alt="User Avatar"
            />
          </a>
        </span>
      </console-navbar>
      <console-sidebar [links]="links" baseLink="/" [brand]="brand"> </console-sidebar>

      <div class="h-100 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </console-layout>
  `,
})
export class AppLayoutComponent {
  public brand = {
    logo: '/assets/logo.svg',
    title: 'Kikstart',
    route: '/',
  }

  public links = [
    LayoutConsoleHelper.header('Components', [
      LayoutConsoleHelper.link('/demos/ui-avatar', 'Avatar', ''),
      LayoutConsoleHelper.link('/demos/ui-brand', 'Brand', ''),
      LayoutConsoleHelper.link('/demos/ui-button', 'Button', ''),
      LayoutConsoleHelper.link('/demos/ui-card', 'Card', ''),
      LayoutConsoleHelper.link('/demos/ui-code', 'Code', ''),
      LayoutConsoleHelper.link('/demos/ui-comment', 'Comment', ''),
      LayoutConsoleHelper.link('/demos/ui-comment-form', 'Comment Form', ''),
      LayoutConsoleHelper.link('/demos/ui-form', 'Form', ''),
      LayoutConsoleHelper.link('/demos/ui-hero', 'Hero', ''),
      LayoutConsoleHelper.link('/demos/ui-list', 'List', ''),
      LayoutConsoleHelper.link('/demos/ui-markdown', 'Markdown', ''),
      LayoutConsoleHelper.link('/demos/ui-no-data', 'No Data', ''),
      LayoutConsoleHelper.link('/demos/ui-render', 'Render', ''),
      LayoutConsoleHelper.link('/demos/ui-sidebar', 'Sidebar', ''),
    ]),
    LayoutConsoleHelper.header('Layout', [
      //
      LayoutConsoleHelper.link('/demos/layout-console', 'Console', ''),
    ]),
    LayoutConsoleHelper.header('Libraries', [
      //
      LayoutConsoleHelper.link('/demos/lib-editorjs', 'Editor.js', ''),
    ]),
  ]
  public user = {
    avatarUrl: 'https://avatars3.githubusercontent.com/u/36491?v=4',
  }
}
