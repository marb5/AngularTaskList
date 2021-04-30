import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task'; //;importujemy task.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [
    {
      name: 'Javascript',
      deadline: '2021-05-14',
      done: false
    },
    {
      name: 'Angular',
      deadline: '2021-06-14',
      done: false
    },
    {
      name: 'Node.js',
      deadline: '2021-06-7',
      done: false
    }
  ];

  constructor() {
    this.config = {
      title: 'AngularTaskList',
      footer: '© AngularTaskList, All rights reserved.',
      date: new Date()
    }
  }
}
