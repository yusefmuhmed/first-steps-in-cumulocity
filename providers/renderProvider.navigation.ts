import { Provider } from "@angular/core";
import { HOOK_NAVIGATOR_NODES, NavigatorNode } from "@c8y/ngx-components";

export const navigatorNodeProvider = {
  provide: HOOK_NAVIGATOR_NODES,
  useValue: [
    {
      label: "Render test table",
      path: "render",
      icon: "file",
      priority: 2,
    },
    {
      label: "Render test widgets",
      path: "widget",
      icon: "profile",
      priority: 1,
    },


    
  ] as NavigatorNode[],
  multi: true,
} as Provider;
