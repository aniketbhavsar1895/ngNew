import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'red';
  }
}

// document.getElementById('appStyle')?.style.color="red"
