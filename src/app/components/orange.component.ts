import { Component } from '@angular/core';

@Component({
  selector: 'orange',
  template: `
    <span class="text-orange-500">
      <ng-content></ng-content>
    </span>
  `
})
export class OrangeComponent {}
