import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBookTopExample]'
})
export class BookTopExampleDirective implements AfterViewInit {

  @Input('appBookTopExample') defaultValue: boolean;
  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (this.defaultValue) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
