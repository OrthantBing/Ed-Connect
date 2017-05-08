import { ErrorService } from './../errors/error.service';


import { Observable } from 'rxjs/Rx';

import { User } from './user.model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private errorService: ErrorService) {

    }

    // This is a hackish way to implement,
    // timeout reset.
    keepalive = new EventEmitter();

    register(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:4000/users/register', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                console.log(error.json());
                return Observable.throw(error.json())
            });
    }

    authenticate(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type':'application/json'
        });

        return this.http.post('http://localhost:4000/users/authenticate', body, {headers: headers})
            .map((response: Response) => {

                /* This event emitter is below is for the idle reset
                 * This event is being watched in app component to 
                 * trigger an idle.watch()
                 */
                this.keepalive.emit();
                return response.json()
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                console.log(error.json());
                return Observable.throw(error.json())
            });
    }

    logout(){
        console.log("clearing");
        localStorage.clear();
    }

    isLoggedIn(){
        // This has to be changed in favour of a round trip to the server.
        return localStorage.getItem('token') !== null;
    }

    profile(){
        const body = JSON.stringify({});
        const headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': localStorage.getItem('token')
        });

        console.log(localStorage.getItem('token'));
        return this.http.post('http://localhost:4000/users/profile', '', {headers: headers})
            .map((response: Response) => {
                return response.json()
            })
            .catch((error: any) => {
                this.errorService.handleError(error.json());
                if (error.status === 401){
                    return Observable.throw(new Error(error.json()));
                }
                return Observable.throw(new Error(error.json()));
            })

    }

}