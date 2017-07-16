import { Directive, ElementRef, Renderer, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[paasAutofocus]'
})
export class AutofocusDirective implements AfterViewChecked {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngAfterViewChecked() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }

}
