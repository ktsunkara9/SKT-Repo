import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task : string = "";

  tasks : string[] =  [];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  onAddTask(task : string) {
    this.taskService.addTask(task);
  }

  private getTasks() {
    this.taskService.getTasks().subscribe(data => {
        for(const task in data){
          console.log(data[task]);
          this.tasks.push(data[task]['task']);
        }
    });
  }

  onAddToDailyTasks(task : string) {
    console.log(task);
    let tasks  = [];
    
     const val = localStorage.getItem('tasks');
    if(val != null){
      tasks = JSON.parse(val);
    } 
    
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  onAddToWeeklyTasks(task : string) {

  }
  
}
