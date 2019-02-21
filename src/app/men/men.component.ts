import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-toolbar-men',
  template: `
    <div #el class="btn-toolbar btn-toolbar-info"><i class="fa fa-heart"></i></div>
    <ng-content></ng-content>
  `
})
export class MenComponent implements OnInit {
  @ViewChild('el', { read: ElementRef }) el: ElementRef;

  ngOnInit() {
    $(this.el.nativeElement).toolbar({
      content: '#toolbar-men-options',
      position: 'right'
    });
  }
}
