import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  /**
   * La liste des cvs
   */
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'trainer',
      '123',
      42,
      'rotating_card_profile3.png'
    ),
    new Cv(
      2,
      'orfila',
      'chloé',
      'Dev',
      '123',
      20,
      'rotating_card_profile.png'
    ),
  ];

  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;
}
