import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkHover]'
})
export class LinkHoverDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseover')
  private onMouseOver(){
    this.elementRef.nativeElement.style.opacity = '100%';
    this.elementRef.nativeElement.style.color = 'black';
    //this.elementRef.nativeElement.style.fontSize = '1.1em'
    this.elementRef.nativeElement.style.transform = 'scale(1.1)'
    console.log('hola 1');
  }

  @HostListener('mouseout')
  private onMouseOut(){
    this.elementRef.nativeElement.style.opacity = '65%';
    //this.elementRef.nativeElement.style.fontSize = '1em'
    this.elementRef.nativeElement.style.transform = 'scale(1)'
    console.log('hola 2');
  }

}
