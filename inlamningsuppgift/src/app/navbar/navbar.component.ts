import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  firstname: string = localStorage.getItem('firstname');
  lastname: string = localStorage.getItem('lastname');
  
    isLoggedIn(){
      
      if(localStorage.getItem('USER_ID')){
        return true
      } else {
        return false
      }
    }
      
    logout(){
      this.auth.logout();
      this.router.navigateByUrl('/');
    }
    
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

}
