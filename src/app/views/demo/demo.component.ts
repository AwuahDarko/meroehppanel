import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/models/sidebar-items';
import { demo_menu } from '../../menu/menu';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  menu: SidebarItem[] = [];
  card_one = {
    background_color: '#00acac',
    title: 'Lorem ipsum',
    number: '1030',
    icon: 'fa-book',
  };
  card_two = {
    background_color: '#348fe2',
    title: 'Lorem ipsum',
    number: '1030',
    icon: 'fa-book',
  };
  card_three = {
    background_color: '#727cb6',
    title: 'Lorem ipsum',
    number: '1030',
    icon: 'fa-book',
  };
  card_four = {
    background_color: '#2d353c',
    title: 'Lorem ipsum',
    number: '1030',
    icon: 'fa-book',
  };

  constructor() {
    demo_menu.forEach((menu) => {
      this.menu.push(new SidebarItem(menu));
    });
  }

  ngOnInit(): void {}
}
