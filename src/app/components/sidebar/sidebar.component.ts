import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarItem } from '../../models/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() menuList: SidebarItem[] = [];
  @Input() headerTitle: string = '';
  @Output() onSelectedChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onItemClicked(item: string): void {
    this.onSelectedChanged.emit(item);
  }
}
