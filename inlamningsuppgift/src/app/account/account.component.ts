import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;



  constructor(private authService: AuthService, ) {

   }

  ngOnInit() {

    this.getUser();
  }


  getUser(){
    this.authService.getUser().subscribe((res => {
      this.user = res[0];
      console.log(this.user);
    }))
  }
}
