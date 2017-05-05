import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthenticationService) { }

  ngOnInit() {
    if (!this.authservice.isLoggedIn()){
      this.router.navigateByUrl('/signin');
    }
  }

}
