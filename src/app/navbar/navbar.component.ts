import { AuthenticationService } from './../authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authservice.logout();
    this.router.navigate(['/', 'signin']);
  }

  loadProfile(){
    this.authservice.profile()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/', 'signin']);
        }  
      )
  }
}
