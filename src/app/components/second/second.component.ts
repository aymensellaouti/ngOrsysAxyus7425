import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `<div class="alert alert-secondary">
    <p>
      Cc je suis le second component
    </p>
  </div>`,
  styles: [``]
})
export class SecondComponent {
  private acr = inject(ActivatedRoute);
  constructor() {
    console.log(
      this.acr.snapshot.params
    );
  }
}
