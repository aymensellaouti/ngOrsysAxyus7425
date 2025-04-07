import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  // On définit le state
  color = 'black';
  fontSize = 75;
  fontFamily = 'garamond';
}
