import { Component } from '@angular/core';

@Component({
  selector: 'purple',
  template: `
    <span class="text-purple-400">
      <ng-content></ng-content>
    </span>
  `
})
export class PurpleComponent {}
