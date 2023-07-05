import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmptyInput]'
})
export class EmptyInputDirective {

  constructor(
    private elementRef : ElementRef
  ) { 
    this.elementRef.nativeElement.style.border = "1px solid red";
  }

  @HostListener('mouseover')
  private onMouseOver(){
    console.log(this.elementRef.nativeElement.value);
  }

/*   this.elementRef.nativeElement.style.border = "1px solid red";
 */
  @HostListener('keyup')
  private onKeyUp(){
    if(this.elementRef.nativeElement.value == null || this.elementRef.nativeElement.value == ''){
      this.elementRef.nativeElement.style.border = "1px solid red";
      console.log("Vacío")
    }else{
      this.elementRef.nativeElement.style.border = "1px solid black";
    }
  }

}
