import { HostListener } from '@angular/core';
import { OnChanges } from '@angular/core';
import { LeadService } from './../lead/lead.service';
import { Observable } from 'rxjs/Rx';
import { Directive, forwardRef } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[asyncEmailValidator][formControlName], [asyncEmailValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncemailValidator), multi: true
    }
  ]
})

export class AsyncemailValidator implements Validator {
  constructor(private leadService: LeadService){
  }

  validate ( c: AbstractControl ): Observable<{[key: string] : any}> {
    return this.validateUniqueEmailObservable(c, c.value)
  }

  validateUniqueEmailObservable(control: AbstractControl, email: string) {
    return new Observable(observer => {
      control
      .valueChanges
      .debounceTime(500)
      .flatMap(value => this.leadService.validateEmail(email))
      .subscribe(
        data => {
          console.log(data);
          observer.next(data);
          observer.complete();
        }
      )
    });
  }

}

/*
export class AsyncemailValidator implements Validator {
  constructor(private leadService: LeadService){
  }

  
  validate ( c: AbstractControl ): Observable<{[key: string] : any}> {
    return this.validateUniqueEmailObservable(c.value)
  }

  validateUniqueEmailObservable( email: string) {
    return this.leadService.validateEmail(email).debounceTime(5000).distinctUntilChanged().first();
  }
}
*/