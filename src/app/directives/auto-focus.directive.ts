import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[rfAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
      this.el.nativeElement.focus();
  }

}
