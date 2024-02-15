import { Component } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-render-data-component',
  templateUrl: './render-data-component.component.html',
  styleUrls: ['./render-data-component.component.css']
})
export class RenderDataComponentComponent {
  single: any[];
  view: any[] = [800, 400];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  legendPosition:string='Right'
  
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  colorScheme : string = 'nightLights';

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}