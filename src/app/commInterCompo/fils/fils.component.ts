import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input({
    alias: 'message'
    // transform:(valeur: string) => {
    //   return valeur + ' cc';
    // }
  })
  messageDeMonPapa = 'il ne m a encore rien envoyé';
}
