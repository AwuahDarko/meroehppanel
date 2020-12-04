import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from '../../models/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() menuList: SidebarItem[] = [];
  @Input() headerTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
