import { AuthenticationService } from './../authentication/authentication.service';
import { EmailValidator } from '@angular/forms/forms';
import { User } from './../authentication/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl,  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repassword: ['', Validators.required]
    });

    this.subscribeToFormChangesAndSetValidity();
  }

  subscribeToFormChangesAndSetValidity(){
    const myFormValueChanges$ = this.registrationForm.valueChanges;

    myFormValueChanges$.subscribe(x => {
      if(x.password === x.repassword) {
        this.registrationForm.setErrors(null);
      }
      else{
        this.registrationForm.setErrors({ "notValid" : true});
      }
    });
  }
  matchingPasswords(){
    return (group: FormGroup): {[key: string]: any} => {
      let password = this.registrationForm.get('password');
      let repassword = this.registrationForm.get('repassword');

      if(password.value !== repassword.value){
        return {
          mimatchedPasswords: true
        }
      }
    }
  }
  onSubmit(){
    const user = new User(
      this.registrationForm.value.username,
      this.registrationForm.value.password,
      this.registrationForm.value.name,
      this.registrationForm.value.email,
      this.registrationForm.value.role
    );

    console.log(user);
    this.authservice.register(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.registrationForm.reset();

  }

}
