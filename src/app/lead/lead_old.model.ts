
import { OnInit } from '@angular/core';
export class LeadModel implements OnInit{
    _id: string; 
    constructor(
        public firstName: string,
        public lastName: string, 
        public email: string,
        public fatherName?: string,
        public spouseName?: string,
        public dateOfBirth?: any,
        public gender?: string,
        public phone?: Array<string>,
        public address?: string,
        public country?: string,
        public passportavailableyn?: string,
        public passportnumber?: string,
        public passportissueddate?: string,
        public visarejected?: string,
        public visarejectednotes?: string,
    ){}

    ngOnInit(){

    }


}