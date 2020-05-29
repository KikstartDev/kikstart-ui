export class LayoutConsoleHelper {
  static header(label: string, children: any[]) {
    return { header: true, label, children };
  }

  static link(path: string, label: string, icon: string) {
    return { path, label, icon };
  }
}
