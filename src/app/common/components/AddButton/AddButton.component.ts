import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-add-button',
  templateUrl: './AddButton.component.html',
  styleUrls: ['./AddButton.component.scss']
})
export class AddButtonComponent {
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onClick(): void {
    this.onAdd.emit();
  }

}
