import { Component} from '@angular/core';

import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'keemFront';
showLoadingIndicator = true;

 constructor(private router: Router) {
  this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator = false;
      }

  });
}

}
