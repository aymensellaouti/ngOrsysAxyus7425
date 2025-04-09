import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { distinctUntilChanged, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'trainer', '123', 42, ''),
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
    ),
    new Cv(
      4,
      'Rakotoniaina',
      'Frank',
      'Dev',
      '1236',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(5, 'Cartiaux', 'Jerome', 'Dev', '1237', 20, '             '),
    new Cv(
      6,
      'Castillo',
      'Matiu',
      'Dev',
      '1238',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      7,
      'Metreau',
      'Stéphane',
      'Dev',
      '1239',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      8,
      'Dupin',
      'Frédéric',
      'Dev',
      '12310',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      9,
      'DuPauwels',
      'Quentin',
      'Dev',
      '12311',
      20,
      'rotating_card_profile3.png'
    ),
  ];

  // Je crée le flux des cvs
  #selectCvSubject$ = new Subject<Cv>();

  /**
   * Le flux des cvs sélectionnés
   */
  selectCv$ = this.#selectCvSubject$.asObservable().pipe(
    distinctUntilChanged()
  );
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id == id) ?? null ;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Permet d'ajouter un cv au flux des cvs sélectionnés
   * @param cv : le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectCvSubject$.next(cv);
  }
}
