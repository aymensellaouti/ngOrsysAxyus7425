import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvRoutingModule } from './cv-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvCardComponent,
    DetailsCvComponent,
    AddCvComponent,
    DefaultImagePipe,
    EmbaucheComponent,
  ],
  imports: [
    CvRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CvModule {}
