/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'sb-content'
})
@View({
  templateUrl: 'views/content.html'
})

// Component controller
export class ContentComponent {
  constructor() {
  }
}

bootstrap(ContentComponent);