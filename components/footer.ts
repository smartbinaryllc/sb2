/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'sb-footer'
})
@View({
  templateUrl: '../views/footer.html'
})

// Component controller
export class FooterComponent {
  constructor() {
  }
}

bootstrap(FooterComponent);