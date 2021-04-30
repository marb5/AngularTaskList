import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task'; //;importujemy task.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string;
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

  //metoda czysci ustawia tasks na pusta liste
  clearTasks() {
    this.tasks = [];
  }

  //co sie dzieje po wpisywaniu w pola tekstowe
  onKeyUp(event: KeyboardEvent){
    //do targeta wyciagamy obiekt dom, reprezentujacy pole tekstowe
    //wynika z ts, HTMLInputElement informacja, ze to element input
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  //metoda dodajaca zadanie do listy
  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: '2021-06-30',
      done: false
    };
    this.tasks.push(task);
  }
}
