import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  // countDown = 5;
  constructor() {
    // Pattern 1 (fluw) TO N (observateurs)
    // Le flux => 5 4 3 2 1
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // 1ere inscription
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // 2éme inscription
    // setTimeout(() => {
      this.myObservable$
        // 5 4 3 2 1
        .pipe(
          // 5 4 3 2 1
          map((valeurEmise) => valeurEmise * 3),
          // 15 12 9 6 3
          filter(nouvelleValeur => nouvelleValeur % 2 == 0)
          // 12 6
        )
        .subscribe({
          next: (val) => {
            this.toastr.info('' + val);
          },
          complete: () => {
            this.toastr.error('FIN DU COMPTE A REBOURS !!!!!!!');
          },
        });
    // this.myObservable$.subscribe({
    //   next: (val) => {
    //     this.countDown = val;
    //   },
    // });
    // }, 3000)
  }
}
