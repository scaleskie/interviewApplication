import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[appForbiddenEntry]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenEntryValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class ForbiddenEntryValidatorDirective implements Validator {
  @Input('appForbiddenEntry') forbiddenEntry = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenEntry
      ? forbiddenEntryValidator(new RegExp(this.forbiddenEntry, 'i'))(control)
      : null;
  }
}

export function forbiddenEntryValidator(entry: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = entry.test(control.value);
    return forbidden ? { forbiddenEntry: { value: control.value } } : null;
  };
}
