import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css'],
})
export class LampeComponent {
  /**
   * L'état de notre lampe
   */
  isOn = false;
  /**
   * Elle modifie l'état de la lampe
   */
  interrupteur() {
    this.isOn = !this.isOn;
  }
}
