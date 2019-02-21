import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, ChangeDetectionStrategy, NgZone } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-toolbar-legends',
  template: `
    <div #el class="btn-toolbar {{class}}"><i class="fa {{icon || 'fa-cog'}}"></i></div>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegendsComponent implements OnInit {
  constructor(private renderer: Renderer2, private ngZone: NgZone) {}

  @Input() class: string;
  @Input() icon: string;
  @Input() toolbarConfig: object;
  @ViewChild('el', { read: ElementRef }) el: ElementRef;

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const contentId = Math.random().toString(36).substr(2, 9);
      this.renderer.setProperty(this.el.nativeElement.nextElementSibling, 'id', contentId);
      this.toolbarConfig['content'] = `#${contentId}`;
      $(this.el.nativeElement).toolbar(this.toolbarConfig);
    });
  }
}
