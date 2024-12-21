import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  // to store the hightlight color we use input decorator
  @Input() appHighlight = '';

  // To get element we us constructor
  constructor(private el: ElementRef) { }

  // To identifiy the mouse event of the element which uses this directive and send the color
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
  }
  @HostListener('mouseleave') onMouseL() {
    this.highlight('');
  }

  // We will give the background color to the element which uses this directive
  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
