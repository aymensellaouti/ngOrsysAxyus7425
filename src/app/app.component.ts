import { Component } from '@angular/core';

@Component({
  // Pour appeler ce composant va dans le html du parent
  // et tappe <app-root/>
  selector: 'app-root',
  // C'est le bout de code HTML que je gére
  templateUrl: './app.component.html',
  //  C'est les fichiers css qui mette en page mon fichier html
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
