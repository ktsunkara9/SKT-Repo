import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component:HomeComponent },
  {path:'dailyTasks', component:DailyTasksComponent},
  { path:'home', component: HomeComponent },
  {path:'tasks', 
  //loadChildren: './tasks/tasks.module#TasksModule'
  loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
