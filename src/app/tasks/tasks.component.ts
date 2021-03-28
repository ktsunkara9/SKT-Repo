import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TaskService } from '../services/task.service';
import { TaskModel } from './models/task.model';


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
  
}
