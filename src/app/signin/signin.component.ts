import { Router } from '@angular/router';
import { User } from './../authentication/user.model';
import { AuthenticationService } from './../authentication/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(
    private fg: FormBuilder, 
    private authservice: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registrationForm = this.fg.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    let user = new User(
      this.registrationForm.value.username,
      this.registrationForm.value.password
    );

    console.log(user);
    this.authservice.authenticate(user)
      .subscribe(
        (data) => {
          console.log("I am in the data");
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.user.id);
          this.router.navigateByUrl('/dashboard')
        },
        error => console.error(error)
      )
  }

}
