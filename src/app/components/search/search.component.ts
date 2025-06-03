import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <input
      type="text"
      (input)="onInputChange($event)"
      placeholder="Search..."
    />
  `,
})
export class AppSearchComponent {
  @Output() search = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value); // Emit plain string
  }
}
