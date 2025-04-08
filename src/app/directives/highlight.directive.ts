import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit{
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  // Mets le background color de l'élément que
  // je cible avec la valeur de bgc
  @HostBinding('style.backgroundColor')
  bgc = this.out;
  constructor() {
    // ici out = red
    this.bgc = this.out;
    console.log('appHighlight');
  }
  ngOnInit(): void {
    // ici out = red si pas d'input sinon
    // c'est la valeur de l'input
    this.bgc = this.out;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}
