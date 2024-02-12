import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-widget-config',
  templateUrl: './custom-widget-config.component.html',
  styleUrls: ['./custom-widget-config.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]

})
export class CustomWidgetConfigComponent implements OnInit {


  @Input() config: any = {'text':'Dashboard'};
  
  constructor() { }

  ngOnInit() {
  }

}
