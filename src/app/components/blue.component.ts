import { Component } from '@angular/core';

@Component({
  selector: 'blue',
  template: `
    <span class="text-blue-400">
      <ng-content></ng-content>
    </span>
  `
})
export class BlueComponent {}
