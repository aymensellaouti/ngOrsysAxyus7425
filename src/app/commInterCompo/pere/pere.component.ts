import { Component } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent {
  processFilsMessage(messageDeMonFils: string) {
    alert(messageDeMonFils + ' : cest bien de rever mon fils :D')
  }

}
