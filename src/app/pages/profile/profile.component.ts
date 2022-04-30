import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor(private login: LoginService) { }

  user: any
  ngOnInit(): void {
    this.user = this.login.getPrincipal();
    // this.login.getCurrentLoggedInUser().subscribe(
    //   (user: any)=>{
    //     this.user = user;
    //   },
    //   (error: any)=>{
    //     alert("error");
    //   }
    // )
  }

}
