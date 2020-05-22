import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { AddButtonComponent } from '../components/AddButton/AddButton.component';
import { TaskItemComponent } from '../components/TaskItem/TaskItem.component';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [
    AddButtonComponent,
    TaskItemComponent,
  ],
  exports: [
    AddButtonComponent,
    TaskItemComponent,
  ]
})
export class SharedModule {}
