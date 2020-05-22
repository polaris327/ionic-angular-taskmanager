import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListPage } from './task-list.page';
import { ExploreContainerComponentModule } from '../../../explore-container/explore-container.module';

import { SharedModule } from 'src/app/common/shared/shared.module';
import { TaskListPageRoutingModule } from './task-list-routing.module'
import { TaskManageFormComponent } from './task-manage-form/task-manage-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TaskListPage }]),
    TaskListPageRoutingModule,
  ],
  declarations: [
    TaskListPage,
    TaskManageFormComponent
  ]
})
export class TaskListPageModule {}
