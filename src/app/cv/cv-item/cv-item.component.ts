import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {

  // Je définis l'état du composant
  @Input({required: true})
  cv!: Cv;
  @Input()
  size = 50;
  // je défnis un event signalant qu'on clické sur moi
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
