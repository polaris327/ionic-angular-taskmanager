import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksPage,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./task-list/task-list.module').then(m => m.TaskListPageModule)
      },
      {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tasks/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule {}
