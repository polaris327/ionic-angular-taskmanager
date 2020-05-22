import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './TaskItem.component.html',
  styleUrls: ['./TaskItem.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  totalPrice: number;
  vatAmount: number;
  profit: number;

  constructor() {
  }

  ngOnInit(): void {
    this.initTask();
  }

  initTask(): void {
    const price = this.task && this.task.price ? this.task.price : 0;
    const vat = this.task && this.task.vatRate ? this.task.vatRate / 100 : 0;
    const cost = this.task && this.task.cost ? this.task.cost : 0;

    this.vatAmount = Math.round(price * vat);
    this.profit = price - cost;
    this.totalPrice = price + this.vatAmount;
  }

  removeItem(): void {
    this.onRemove.emit(this.index);
  }

  selectItem(): void {
    this.onSelect.emit(this.index);
  }

  getPriceWithCurrency(currency: string, price: number): string {
    const amount: string = (price || 0).toString();

    switch(currency) {
      case 'dollar':
        return '$' + parseFloat(amount).toFixed(2);
      case 'euro':
        return '€' + parseFloat(amount).toFixed(2);
      default:
        return '£' + parseFloat(amount).toFixed(2);
    }
  }

}
