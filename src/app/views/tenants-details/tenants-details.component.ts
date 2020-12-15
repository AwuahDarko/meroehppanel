import { Component, OnInit } from '@angular/core';
import { SidebarItem } from 'src/app/models/sidebar-items';
import { tenants_details_menu } from '../../menu/menu';

@Component({
  selector: 'app-tenants-details',
  templateUrl: './tenants-details.component.html',
  styleUrls: ['./tenants-details.component.css'],
})
export class TenantsDetailsComponent implements OnInit {
  menu: SidebarItem[] = [];

  constructor() {
    tenants_details_menu.forEach((menu) => {
      this.menu.push(new SidebarItem(menu));
    });
  }

  ngOnInit(): void {}
}
