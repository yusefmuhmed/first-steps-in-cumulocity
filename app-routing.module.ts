

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderDataComponentComponent } from './render-data-component/render-data-component.component';
import { CustomWidgetComponent } from './custom-widget/custom-widget.component';
import { CustomWidgetConfigComponent } from './custom-widget-config/custom-widget-config.component';

const routes: Routes = [
  { path: 'render', component: RenderDataComponentComponent },
  { path: 'widget', component: CustomWidgetConfigComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
