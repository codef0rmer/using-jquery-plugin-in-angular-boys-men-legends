import { Directive, ElementRef } from '@angular/core';

declare const $: any;

@Directive({
  selector: '[appToolbarBoys]'
})
export class BoysDirective {
  constructor(private el: ElementRef) {
    $(this.el.nativeElement).toolbar({
      content: '#toolbar-boys-options',
      position: 'right'
    });
  }
}
