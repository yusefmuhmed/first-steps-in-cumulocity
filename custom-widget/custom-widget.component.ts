import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-widget',
  templateUrl: './custom-widget.component.html',
  styleUrls: ['./custom-widget.component.css']
})
export class CustomWidgetComponent implements OnInit {

  @Input() config: any;
  constructor() { }

  ngOnInit() {
  }

}
