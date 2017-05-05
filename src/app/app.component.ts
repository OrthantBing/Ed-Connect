import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   idleState = 'Not Started';
    timedOut = false;

    lastPing?: Date = null;
  constructor(
    private idle: Idle, 
    private authservice: AuthenticationService,
    private router: Router,
    private keepalive: Keepalive

    
  ){
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Set the idle time [in seconds]
    this.idle.setIdle(1800);
    // Set the timeout time after idle time is expired [in seconds]
    this.idle.setTimeout(30);
    // Set the interrupts that would interrupt the idle time.
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // When times out check if the user is logged in.
    // If true, navigate to signin page.
    this.idle.onTimeout.subscribe(() => {
          this.authservice.logout();
          this.router.navigate(['/', 'signin']);
    });

    // Initial trigger for idle watch
    this.idle.watch();

    // Trigger after a login.
    this.authservice.keepalive.subscribe(() => this.idle.watch());

  }
}
