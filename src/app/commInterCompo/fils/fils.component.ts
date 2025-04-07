import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  // 1- Je vais définir l'événement que je vais ddéclencher pour envoyer le message à mon pere
  @Output()
  messageToPapa = new EventEmitter<string>();

  // 2- La méthode qui emet l'événement
  sendMessage() {
    this.messageToPapa.emit("cc papa j'ai besoin de 500 euros pour la nouvelle switch :D");
  }
}
