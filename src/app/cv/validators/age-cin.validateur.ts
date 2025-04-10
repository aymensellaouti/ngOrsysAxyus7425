import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";

export const ageCinValidator: ValidatorFn = (form: AbstractControl) => {
      const age = +form.get('age')?.value;
      const cin = +form.get('cin')?.value.substring(0,2);
      if(!age || !cin) return  null;
      return (age >= 60 && cin <= 19 || age < 60 && cin > 19 ) ? null : {ageCin: "L'age ne correspond pas au Cin"}
};
