import { Component, Input } from '@angular/core';

@Component({
  selector: 'codes',
  template: `
    <div class="bg-slate-800 text-white rounded-md shadow-2xl">
        <div class="p-4">
            <p class="inline-block text-gray-400">
                {{ path }}
            </p>
            <p class="inline-block float-right text-white cursor-pointer hover:bg-slate-500/20 px-3 rounded-md">
                {{ message }}
            </p>
        </div>
        <div class="overflow-x-auto">
            <div class="inline-block pb-2">
                <ng-content></ng-content>
            </div>
        </div>
    </div>
  `
})
export class CodesComponent {
  @Input() path!: string
  message: string = 'copy to clipboard'
}
