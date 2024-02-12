import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule,HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';
import { RenderDataComponentComponent } from './render-data-component/render-data-component.component';
import { AppRoutingModule } from './app-routing.module';
import {navigatorNodeProvider} from './providers/renderProvider.navigation'
import { CustomWidgetComponent } from './custom-widget/custom-widget.component';
import { CustomWidgetConfigComponent } from './custom-widget-config/custom-widget-config.component';
import { NgForm } from '@angular/forms';
import { WidgetsModule } from "@c8y/ngx-components/widgets";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    WidgetsModule,
    LeafletModule
  ],
  bootstrap: [BootstrapComponent],
   declarations: [		
    RenderDataComponentComponent,
      CustomWidgetComponent,
      CustomWidgetConfigComponent
   ],
  providers: [
    navigatorNodeProvider,
    NgForm
  ]
})
export class AppModule {}
