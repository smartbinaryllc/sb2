/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {HeaderComponent} from 'components/header';
import {ContentComponent} from 'components/content';
import {FooterComponent} from 'components/footer';

// Annotation section
@Component({
  selector: 'app'
})
@View({
  templateUrl: 'views/app.html',
  directives: [HeaderComponent, ContentComponent, FooterComponent]
})

// Component controller
class SBAppComponent {
  constructor() {
  }
}

bootstrap(SBAppComponent);