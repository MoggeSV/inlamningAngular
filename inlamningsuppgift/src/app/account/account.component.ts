import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { AuthService } from '../auth.service';
import { NgOnChangesFeature } from '@angular/core/src/render3';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})




export class AccountComponent implements OnInit {

  user: User;
  firstname: string;
 lastname: string;


  constructor(private authService: AuthService, ) {

   }

   ngOnChanges(){
    
  }

  ngOnInit() {
     this.firstname = localStorage.getItem("firstname");
    this.lastname= localStorage.getItem("lastname");
    this.getUser();
  }


  getUser(){
    this.authService.getUser().subscribe((res => {
      this.user = res[0];
      
    }))
  }
}

