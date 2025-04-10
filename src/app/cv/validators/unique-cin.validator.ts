import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../services/cv.service";
import { map } from "rxjs";

export const uniqueFieldValidator = (
  cvSerice: CvService,
  fieldName: string,
  errorName: string = 'champUnique',
  errorMessage: string = 'ce champ existe déjà'
): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    const fieldValue = control.value;
    // Observable<Cv[]> => Observable(ValidationErrors | null)
    return cvSerice
      .getCvsByProperty(fieldName, fieldValue)
      .pipe(
        map((cvs) =>
          cvs.length ? { [errorName]: errorMessage } : null
        )
      );
  };
};
