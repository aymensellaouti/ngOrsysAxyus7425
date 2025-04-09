import { Component, inject, OnDestroy } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnDestroy {
  // private readonly todoService = inject(TodoService);
  private readonly cvService = inject(CvService);
  private toastr = inject(ToastrService);
  //selectCvSubscription: Subscription;
  today = new Date();
  /**
   * La liste des cvs
   */
  cvs: Cv[] = this.cvService.getCvs();

  /**
   * Le cv sélectionné
   */
  selectedCv$: Observable<Cv> = this.cvService.selectCv$; ;
  // J'ai commandé un plat loggerService
  private loggerService = inject(LoggerService);
  constructor() //private loggerService: LoggerService // J'ai commandé un plat loggerService
  {
    this.toastr.info('Bienvenu dans notre cvTech')
    this.loggerService.logger('cc je suis le cvComponent');
    // this.selectCvSubscription = this.cvService.selectCv$
    // // .pipe(takeUntilDestroyed())
    // .subscribe({
    //   next: cv =>  {
    //     this.selectedCv = cv;
    //     this.toastr.info(`${cv.name} a été sélectionné`)
    //   }
    // })
  }
  ngOnDestroy(): void {
    //this.selectCvSubscription.unsubscribe();
  }
  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
