import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  isSubmitted: boolean = false;
  error: boolean = false;
  errorMessage: string;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],

      postal_addressline: ['', Validators.required],
      postal_zipcode: ['', Validators.required],
      postal_city: ['', Validators.required],
      postal_country: ['', Validators.required],

      billing_addressline: ['', Validators.required],
      billing_zipcode: ['', Validators.required],
      billing_city: ['', Validators.required],
      billing_country: ['', Validators.required],

      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControls() { return this.registerForm.controls }


  register() {
    this.isSubmitted = true;

    if(this.registerForm.invalid) {
      
      return;
    }

    this.authService.register(this.registerForm.value).subscribe((registerres) => {
      if(registerres["success"]) {
        console.log("reg success");
        this.authService.login(this.registerForm.value).subscribe((loginres) => {
          if(loginres["success"]) {
            this.router.navigateByUrl('/login');
          }
          else {
            this.error = true;
            this.errorMessage = "Cant register user."
          }         
        })        
      }    
    })
  }
}