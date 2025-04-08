import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  private readonly todoService = inject(TodoService);
  private readonly cvService = inject(CvService);
  private toastr = inject(ToastrService);
  today = new Date();
  /**
   * La liste des cvs
   */
  cvs: Cv[] = this.cvService.getCvs();

  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;
  // J'ai commandé un plat loggerService
  private loggerService = inject(LoggerService);
  constructor() //private loggerService: LoggerService // J'ai commandé un plat loggerService
  {
    this.toastr.info('Bienvenu dans notre cvTech')
    this.loggerService.logger('cc je suis le cvComponent');
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
