import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css'],
})
export class InfoBoxComponent implements OnInit {
  @Input() id: number = null;
  @Input() firstName: string = null;
  @Input() lastName: string = null;
  @Input() email: string = null;
  @Input() age: number = null;

  constructor() {}

  ngOnInit() {}
}
