export class SidebarItem {
  icon: string;
  avatar_color: string;
  title: string;
  subtitle: string;
  url: string;
  disable_route: boolean;

  constructor(menu: any) {
    this.icon = menu.icon;
    this.avatar_color = menu.avatar_color;
    this.title = menu.title;
    this.subtitle = menu.subtitle;
    this.url = menu.url;
    this.disable_route = menu.disable_route;
  }
}
