import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  updateForm: FormGroup;
  user: User;

  ngOnInit() {

    this.getInfo();
    this.updateForm = this.formBuilder.group({
      firstname: [''],
      middlename: [''],
      lastname: [''],
      birthday: [''],

      postal_addressline: [''],
      postal_zipcode: [''],
      postal_city: [''],
      postal_country: [''],

      billing_addressline: [''],
      billing_zipcode: [''],
      billing_city: [''],
      billing_country: [''],

      email: [''],
      password: ['']
    })
  }

getInfo(){
  this.authService.getUser().subscribe((res => {
    this.user = res[0];
    const updateForm = this.updateForm.controls;
    updateForm["firstname"].setValue(res[0].firstname);
    updateForm["middlename"].setValue(res[0].middlename);
    updateForm["lastname"].setValue(res[0].lastname);
    updateForm["birthday"].setValue(res[0].birthday);
    updateForm["postal_addressline"].setValue(res[0].postal_addressline);
    updateForm["postal_zipcode"].setValue(res[0].postal_zipcode);
    updateForm["postal_city"].setValue(res[0].postal_city);
    updateForm["postal_country"].setValue(res[0].postal_country);

    updateForm["billing_addressline"].setValue(res[0].billing_addressline);
    updateForm["billing_zipcode"].setValue(res[0].billing_zipcode);
    updateForm["billing_city"].setValue(res[0].billing_city);
    updateForm["billing_country"].setValue(res[0].billing_country);

    updateForm["email"].setValue(res[0].email);
    
     localStorage.setItem("firstname", res[0].firstname);
     localStorage.setItem("lastname", res[0].lastname);
    


    

  }))
}

  updateInfo() {
    this.authService.updateUser(this.updateForm.value).subscribe(data => {
      const values = Object.keys(data).map(key => data[key]);
      const success = values.join(",");

      if(success) {
        
        this.getInfo();
        this.router.navigateByUrl('/');

        
      }
    })
  }

}
