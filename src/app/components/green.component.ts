import { Component } from '@angular/core';

@Component({
  selector: 'green',
  template: `
    <span class="text-emerald-500">
      <ng-content></ng-content>
    </span>
  `
})
export class GreenComponent {}
