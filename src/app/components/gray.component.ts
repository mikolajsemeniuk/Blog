import { Component } from '@angular/core';

@Component({
  selector: 'gray',
  template: `
    <span class="text-gray-500">
      <ng-content></ng-content>
    </span>
  `
})
export class GrayComponent {}
