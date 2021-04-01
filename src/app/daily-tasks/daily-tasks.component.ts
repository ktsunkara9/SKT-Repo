import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent implements OnInit {

  dailyTasks : [] =[];

  constructor() { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    let val = localStorage.getItem('tasks');

    if(val != null){
      this.dailyTasks = JSON.parse(val);
    }
    console.log(this.dailyTasks);
  }

}
