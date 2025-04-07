import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  /**
   * La couleur par défaut
   */
  defaultColor = 'red';
  /**
   * Le représentant
   * L'attribut qui représente l'état de la couleur de la div
   */
  color = this.defaultColor;

  /**
   * Change la couleur
   * @param newColor : la nouvelle couleur
   */
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
