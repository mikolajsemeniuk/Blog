import { Component } from '@angular/core';

@Component({
  selector: 'prerequisites',
  template: `
    <p class="text-4xl mt-12 mb-4">
        <ng-content></ng-content>
    </p>
  `
})
export class PrerequisitesComponent {}
