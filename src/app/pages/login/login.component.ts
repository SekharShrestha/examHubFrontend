import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginData={
    userName: '',
    password: '',
  }

  formSubmit(){
    if(this.loginData.userName == '' || this.loginData.userName == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }
    else if(this.loginData.password == '' || this.loginData.password == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any)=>{
        console.log("Success");
        console.log(data);
        this.snack.open("Login Successful", "OK", {duration: 3000, verticalPosition: "top" });
        this.login.loginUser(data.token);
        this.login.getCurrentLoggedInUser().subscribe(
          (user: any)=>{
          this.login.setPrincipal(user);
          console.log(user);

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
        }
      )
      },



      (error: any)=>{
        console.log("Error");
        console.log(error);
        this.snack.open("Wrong Username or Password, Please check", "OK", {duration: 3000, verticalPosition: "top" });
      }
    )
    }

    
}

function data(data: any): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}

