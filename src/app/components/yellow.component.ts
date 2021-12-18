import { Component } from '@angular/core';

@Component({
  selector: 'yellow',
  template: `
    <span class="text-yellow-500">
      <ng-content></ng-content>
    </span>
  `
})
export class YellowComponent {}
