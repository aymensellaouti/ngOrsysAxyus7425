import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { APP_CONST } from "src/app/config/constantes.config";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv.model";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { catchError, EMPTY, tap } from "rxjs";
import { uniqueFieldValidator } from "../validators/unique-cin.validator";
import { ageCinValidator } from "../validators/age-cin.validateur";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  router = inject(Router);

  form = this.formBuilder.group(
    {
      name: ['', [Validators.required], []],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [
            Validators.required,
            //  , Validators.pattern('[0-9]{8}')
          ],
          asyncValidators: [
            // fonctValid(cvService)
            uniqueFieldValidator(this.cvService, 'cin'),
          ],
          updateOn: 'blur',
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    },
    {
      validators: [ageCinValidator],
      asyncValidators: [],
      updateOn: 'change',
    }
  );
  constructor() {
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.disable();
        } else {
          this.path?.enable();
        }
      },
    });

    const savedForm = localStorage.getItem(APP_CONST.savedAddCvForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
    //this.form.statusChanges
  }

  addCv() {
    console.log('ajoute le cv');

    if (!this.form.value.path) {
      this.form.value['path'] = '';
    }
    // this.cvService.addCvToApi(this.form.value as Cv).subscribe({
    //   next: (cv) => {
    //     localStorage.removeItem(APP_CONST.savedAddCvForm);
    //     this.toastr.success(`${cv.name} a été ajouté avec succès`);
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    //   error: (e) => {
    //     this.toastr.error(`Problème d'ajout merci de contacter l'admin`);
    //   }
    // });
    this.cvService
      .addCvToApi(this.form.value as Cv)
      .pipe(
        tap((cv) => {
          localStorage.removeItem(APP_CONST.savedAddCvForm);
          this.form.reset();
          this.toastr.success(`${cv.name} a été ajouté avec succès`);
          this.router.navigate([APP_ROUTES.cv]);
        }),
        catchError((e) => {
          this.toastr.error(`Problème d'ajout merci de contacter l'admin`);
          return EMPTY;
        })
      )
      .subscribe();
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }

  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
        APP_CONST.savedAddCvForm,
        JSON.stringify(this.form.value)
      );
    }
  }
}
