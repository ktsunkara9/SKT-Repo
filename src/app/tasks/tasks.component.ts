import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  private getTasks() {
    this.taskService.getTasks().subscribe(data => {
        for(const t in data){
          console.log(data[t]);
          this.tasks.push(data[t]['task']);
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

  onAddTask(form: NgForm) {
    console.log("Submitted", form.value.task);
    this.tasks.push(form.value.task);
  }
  
  
}
