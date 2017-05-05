import { AuthenticationService } from './../authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authservice.logout();
    this.router.navigate(['/', 'signin']);
  }

  

}
