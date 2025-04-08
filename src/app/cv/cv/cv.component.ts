import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  today = new Date();
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
      ''
    ),
    new Cv(
      2,
      'orfila',
      'chloé',
      'Dev',
      '1234',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      3,
      'Chaignaud',
      'Pierre',
      'Dev',
      '1235',
      20,
      'rotating_card_profile2.png'
    ),new Cv(
      4,
      'Rakotoniaina',
      'Frank',
      'Dev',
      '1236',
      20,
      'rotating_card_profile3.png'
    ),new Cv(
      5,
      'Cartiaux',
      'Jerome',
      'Dev',
      '1237',
      20,
      '             '
    ),new Cv(
      6,
      'Castillo',
      'Matiu',
      'Dev',
      '1238',
      20,
      'rotating_card_profile3.png'
    ),new Cv(
      7,
      'Metreau',
      'Stéphane',
      'Dev',
      '1239',
      20,
      'rotating_card_profile2.png'
    ),new Cv(
      8,
      'Dupin',
      'Frédéric',
      'Dev',
      '12310',
      20,
      'rotating_card_profile3.png'
    ),new Cv(
      9,
      'DuPauwels',
      'Quentin',
      'Dev',
      '12311',
      20,
      'rotating_card_profile3.png'
    ),
  ];

  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
