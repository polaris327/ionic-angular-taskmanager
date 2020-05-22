import { Component, OnInit } from '@angular/core';

import { Task } from '../../../common/models/task';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss']
})
export class TaskListPage implements OnInit {
  tasks: Task[] = [];

  selectedTask: Task;
  selectedIndex: number;
  addingTask: Task;
  showAddForm = false;
  showEditForm = false;
  formType: string;

  constructor() {}

  ngOnInit(): void {
    this.initAddingTask();
  }

  initAddingTask(): void {
    this.showAddForm = false;
    this.showEditForm = false;
    this.addingTask = {
      title: '',
      price: undefined,
      cost: undefined,
      vatRate: undefined,
      time: undefined,
      timeUnit: '',
      currency: '',
      description: ''
    };
    this.formType = '';
    this.selectedTask = null;
    this.selectedIndex = -1;
  }

  getTotalProfit(): string {
    let totalProfit = 0;
    this.tasks.forEach(task => {
      totalProfit += (task.price || 0) - (task.cost || 0);
    });

    return '£' + totalProfit.toFixed(2);
  }

  getTotalCost(): string {
    let totalCost = 0;
    this.tasks.forEach(task => {
      totalCost += (task.cost || 0);
    });

    return '£' + totalCost.toFixed(2);
  }

  getSubTotal(): string {
    let total = 0;
    this.tasks.forEach(task => {
      total += (task.price || 0);
    });

    return '£' + total.toFixed(2);
  }

  getVat(): string {
    let vat = 0;
    this.tasks.forEach(task => {
      vat += (task.price || 0) + (task.price || 0) * (task.vatRate || 0) / 100;
    });

    return '£' + vat.toFixed(2);
  }

  getTotalPrice(): string {
    let totalPrice = 0;
    this.tasks.forEach(task => {
      totalPrice += this.getTaskPrice(task);
    });

    return '£' + totalPrice.toFixed(2);
  }

  getTaskPrice(task: Task): number {
    const price = task.price || 0;
    const vat = task.vatRate || 0;
    return price + price * vat / 100;
  }

  onCancelForm(): void {
    this.initAddingTask();
  }

  onSelectTask(idx: number): void {
    this.selectedIndex = idx;
    this.selectedTask = this.tasks[idx];
    this.toggleEditForm();
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.formType = 'add';
    } else {
      this.formType = '';
    }
  }

  toggleEditForm(): void {
    if (!this.showEditForm) {
      this.formType = 'edit';
    } else {
      this.formType = '';
    }
    this.showEditForm = !this.showEditForm;
  }

  addNewTask(task: Task): void {
    const newTask = { ...task };
    this.tasks = [...this.tasks, newTask];
    this.initAddingTask();
  }

  updateTask(task: Task): void {
    this.tasks[this.selectedIndex] = { ...task };
    this.initAddingTask();
  }

  removeTask(idx: number): void {
    const tasks = [...this.tasks];
    if (idx > -1) {
      tasks.splice(idx, 1);
      this.tasks = tasks;
    }
  }

  onSubmitTask(task: Task): void {
    if (this.formType === 'add') {
      this.addNewTask(task);
    } else {
      this.updateTask(task);
    }
  }

}
