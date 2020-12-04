import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css'],
})
export class DataCardComponent implements OnInit {
  @Input() card_props = {
    background_color: 'black',
    title: 'Lorem ipsum',
    number: '1030',
    icon: 'fa-book',
  };
  constructor() {}

  ngOnInit(): void {}
}
