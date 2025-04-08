import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Quels attributs je veux manipuler
  @HostBinding('style.color')
  color = 'black';
  @HostBinding('style.borderColor')
  borderColor = 'black';
  constructor() {
    console.log('Rainbow');
  }
  // Quels comportement et suite à quel evenement
  @HostListener('keyup')
  onKeyup() {
    this.color = this.borderColor = this.getRandomColor();
  }
  private getRandomColor():string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
