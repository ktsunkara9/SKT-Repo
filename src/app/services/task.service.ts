import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TaskModel } from '../tasks/models/task.model';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient : HttpClient) { }

  addTask(task : string) {
    console.log("Task to be Added : ", task);
    const url = apiUrl+"/tasks";
    console.log("URL : ", url);
    // this.httpClient.post(url,{"task": task}).subscribe(respone => {
      this.httpClient.post(url,{"task": task}).subscribe(respone => {
      console.log(respone);
    });
  }

  getTasks() : Observable<TaskModel[]> {
    const url = apiUrl+"/tasks";
    console.log(url);
    return this.httpClient.get<TaskModel[]>(url);
  }
}
