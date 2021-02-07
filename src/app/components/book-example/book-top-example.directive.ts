import { Directive, ElementRef, Input, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appBookTopExample]'
})
export class BookTopExampleDirective {
  @Input('appBookTopExample') defaultValue: boolean;
  constructor(private el: ElementRef) { 
        
  }

  ngAfterViewInit() : void {
    console.log(this.defaultValue);
    if(this.defaultValue){
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
