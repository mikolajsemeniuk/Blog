import { Component } from '@angular/core';

@Component({
  selector: 'subtitle',
  template: `
    <p class="text-3xl mt-24">
        <ng-content></ng-content>
    </p>
  `
})
export class SubtitleComponent {}
