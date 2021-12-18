import { Component } from '@angular/core';

@Component({
  selector: 'description',
  template: `
    <p class="text-lg mt-2 mb-4">
        <ng-content></ng-content>
    </p>
  `
})
export class DescriptionComponent {}
