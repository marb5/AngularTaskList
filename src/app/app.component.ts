import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTaskList';
  get footer(): string { //getter stopki
    return "2021 © AngularTaskList, All rights reserved."
  }
}
