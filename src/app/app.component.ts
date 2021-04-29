import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;

  constructor() {
    this.config = {
      title: 'AngularTaskList',
      footer: '© AngularTaskList, All rights reserved.',
      date: new Date()
    }
  }
}
