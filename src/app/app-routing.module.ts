import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component:HomeComponent },
  {path:'tasks', component:TasksComponent},
  {path:'dailyTasks', component:DailyTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
