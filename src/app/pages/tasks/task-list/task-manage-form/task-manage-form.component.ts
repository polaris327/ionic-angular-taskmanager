import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contacts, Contact } from '@ionic-native/contacts';
import { Task } from 'src/app/common/models/task';

@Component({
  selector: 'app-task-manage-form',
  templateUrl: './task-manage-form.component.html',
  styleUrls: ['./task-manage-form.component.scss']
})
export class TaskManageFormComponent implements OnInit {
  @Input() formType: string;
  @Input() selectedTask: Task;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  newTask: Task;
  address: Contact[] = [];

  constructor(private contacts: Contacts) {}

  ngOnInit(): void {
    this.initialTaks();
  }

  initialTaks(): void {
    if (this.selectedTask) {
      this.newTask = { ...this.selectedTask }
    } else {
      this.newTask = {
        title: '',
        price: undefined,
        cost: undefined,
        vatRate: undefined,
        time: undefined,
        currency: '',
        timeUnit: '',
        description: '',
        address: null
      };
    }

    if (this.contacts.find(["*"])) {
      this.contacts.find(["*"]).then(result => {
        this.address = result;
      })
    }
  }

  updateTask(): void {
    this.onSubmit.emit(this.newTask);
  }

  cancelForm() {
    this.onCancel.emit();
  }

  onIncrease(): void {
    this.newTask.time = this.newTask.time ? this.newTask.time + 1 : 1;
  }

  onDecrease(): void {
    this.newTask.time = this.newTask.time && this.newTask.time > 0
      ? this.newTask.time - 1 : 0;
  }

}
