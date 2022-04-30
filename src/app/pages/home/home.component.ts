import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(public login: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getPrincipal();
  }

  public logout(){
    this.login.logout();
    this.isLoggedIn = false;
    this.user = null;
    window.location.reload();
  }

  formSubmit(){ 

          if(this.login.getPrincipalRole()=="ADMIN"){
            // this.router.navigate(["/admin"]);
            window.location.href = "/admin";
          }
          else if(this.login.getPrincipalRole()=="NORMAL"){
            // this.router.navigate(["/user-dashboard"]);
            window.location.href = "/user-dashboard/0";
          }
          else{
            this.login.logout();
            location.reload();
          }
        
      
      



      (error: any)=>{
        console.log("Error");
        console.log(error);
        this.snack.open("Failed", "OK", {duration: 3000, verticalPosition: "top" });
      }
    
    }

}
