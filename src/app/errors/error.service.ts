import { Injectable, EventEmitter } from '@angular/core';
import { Error } from './error.model';

@Injectable()
export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        console.log(error.error);
        // The mongoose validations messages are under error.errmsg key.
        const errorData = new Error(error.title, error.error.message || error.error.errmsg);
        this.errorOccurred.emit(errorData);
    };

}