import { Component } from '@angular/core';
import { Todo } from './interface/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Todo[] = [
    {task: 'Wash dishes', isFinished: true, priority: 1},
    {task: 'Sweep floor', isFinished: true, priority: 2},
    {task: 'Buy groceries', isFinished: true, priority: 3},
    {task: 'Do laundry', isFinished: false, priority: 4},
    {task: 'Rearrange furniture', isFinished: false, priority: 5},
    {task: 'Clean bedroom', isFinished: true, priority: 6}
  ];

  color: string = 'red';
  title: any;

  getPriorityColor(task: Todo): string {
    if (task.priority === 0) {
      return "priority1";
    } else if (task.priority === 1) {
      return "priority2";
    } else if (task.priority === 2) {
      return "priority3";
    }
      else {
      return "priority4";
    }
  }


}