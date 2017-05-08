import { LeadInterface } from './lead.interface';

export class LeadModel{
    public _id?: string; 
    public firstName: string;
    public lastName: string; 
    public email: string;
    public fatherName?: string;
    public spouseName?: string;
    public dateOfBirth?: any;
    public gender?: string;
    public phone?: Array<string>;
    public address?: string;
    public country?: string;
    public passportavailableyn?: string;
    public passportnumber?: string;
    public passportissueddate?: string;
    public visarejected?: string;
    public visarejectednotes?: string;
    constructor(
        lead: LeadInterface
    ){
        let temparray = []
        for (let key in lead){
            if ((key === 'phone' && lead[key]) || (key === 'alternatephone' && lead[key])){
                temparray.push(lead[key]);

            } 
            else {
                if (lead[key]){
                    this[key] = lead[key];
                }               
            }
        }
        if (temparray.length > 0){
            this.phone = temparray
        }
    }

}