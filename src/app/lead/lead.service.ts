import { LeadModel } from './lead.model';
import { ErrorService } from './../errors/error.service';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class LeadService {
    constructor(private http: Http, private errorService: ErrorService){

    }
    
    getleadlist() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

        return this.http.get('http://localhost:4000/lead', {headers: headers})
            .map((response: Response) => {
                return response.json()
            })
            .catch((error: Response) => {
                console.log(error.json());
                this.errorService.handleError(error.json());
                return Observable.throw(new Error(error.json()));
            })
    }
    
    updatelead(lead: LeadModel){
        const body = JSON.stringify(lead);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

        return this.http.patch('http://localhost:4000/lead/update/' + lead._id, body, {headers: headers})
            .map((response: Response) => {
                return response.json()
            })
            .catch((error: Response) => {
                console.log(error.json());
                this.errorService.handleError(error.json());
                return Observable.throw(new Error(error.json()));
            })
    }
    
    createlead(lead: LeadModel){
        const body = JSON.stringify(lead);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

        return this.http.post('http://localhost:4000/lead/add', body, {headers: headers})
            .map((response: Response) => {
                return response.json()
            })
            .catch((error: Response) => {
                console.log(error.json());
                this.errorService.handleError(error.json());
                return Observable.throw(new Error(error.json()));
            })
    }

    validateEmail(email: string){
        const body = JSON.stringify({ email: email});
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

        return this.http.post('http://localhost:4000/lead/validateemail', body, {headers: headers} )
            .map((response: Response) => {
                return response.json();
            })

            .catch((error: Response) => {
                console.log(error.json());
                return Observable.throw(new Error(error.json()));
            })
    }

    getLeadById(id: string){
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        });

        return this.http.get('http://localhost:4000/lead/' + id, {headers: headers})
            .map((response: Response) => {
                return response.json()
            })

            .catch((error: Response) => {
                console.log(error.json());
                this.errorService.handleError(error.json());
                return Observable.throw(new Error(error.json()));
            })
    }
}