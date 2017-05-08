import { NG_VALIDATORS } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Validator, FormControl, ValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';

function validateDateFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (!c.value){
            return null;
        }
        if(c.value.match(/[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/) ){
            return null;
        }
        else {
            return {
                datevalidator: {
                    valid: false
                }
            };
        }
    }
}

@Directive({
    selector: '[datevalidator][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: DateValidator, multi: true}
    ]
})
export class DateValidator implements Validator {
    validator: ValidatorFn;
    constructor(){
        this.validator = validateDateFactory();
    }
    validate(c: FormControl){
        return this.validator(c);
    }

}