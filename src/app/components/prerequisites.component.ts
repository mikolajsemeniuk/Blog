import { Component } from '@angular/core';

@Component({
  selector: 'prerequisites',
  template: `
    <p class="text-4xl mt-12">
        <ng-content></ng-content>
    </p>
  `
})
export class PrerequisitesComponent {}
