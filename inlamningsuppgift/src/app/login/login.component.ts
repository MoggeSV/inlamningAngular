import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string;
  errorBool: boolean = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formControls() { return this.loginForm.controls }

  login() {
    this.isSubmitted = true;

    if(this.loginForm.invalid) {
      this.errorBool = true;
      this.errorMessage = 'Email and/or Password is incorrect'
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((res) => {
      localStorage.setItem("ACCESS_TOKEN", res["token"]);
      localStorage.setItem("USER_ID", res["id"]);
      localStorage.setItem("USER_EMAIL", res["email"]);
      localStorage.setItem("firstname", res["firstname"]);
      localStorage.setItem("lastname", res["lastname"]);
      

      if(res["success"]) {
        this.router.navigateByUrl('/account');
      }

    })  
    
    

  }

}