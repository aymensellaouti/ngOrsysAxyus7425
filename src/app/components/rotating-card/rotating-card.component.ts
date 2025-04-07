import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css'],
})
export class RotatingCardComponent {
  // Le state de notre composant
  name = 'Sellaouti';
  firstname = 'Aymen';
  job = 'teacher';
  path = 'rotating_card_profile3.png';
}
