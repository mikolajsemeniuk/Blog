import { Component } from '@angular/core';

@Component({
  selector: 'subject',
  template: `
    <p class="text-6xl mt-16 mb-8">
        <ng-content></ng-content>
    </p>
  `
})
export class TitleComponent {}
