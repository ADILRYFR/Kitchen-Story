import { Component } from '@angular/core';
import { Purchases } from './purchases';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Purchases:Array<Purchases>=[];
  title = 'assigment';
}
