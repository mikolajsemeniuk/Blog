import { Component } from '@angular/core';

@Component({
  selector: 'red',
  template: `
    <span class="text-red-400">
      <ng-content></ng-content>
    </span>
  `
})
export class RedComponent {}
