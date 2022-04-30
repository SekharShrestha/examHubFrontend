import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  formSubmit(){
    if(this.user.userName == '' || this.user.userName == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }
    else if(this.user.firstName == '' || this.user.firstName == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }
    // else if(this.user.lastName == '' || this.user.lastName == null){
    //   this.snack.open("Last Name is required", "OK", {duration: 3000, verticalPosition: "top" });
    //   return;
    // }
    else if(this.user.email == '' || this.user.email == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }
    else if(this.user.phone == '' || this.user.phone == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }
    else if(this.user.password == '' || this.user.password == null){
      this.snack.open("Fields marked with * must be filled", "OK", {duration: 3000, verticalPosition: "top" });
      return;
    }

    else{      
      this.userService.addUser(this.user).subscribe(
        (data)=>{
          console.log(data);
          this.snack.open("Successfully Registered", "OK", {duration: 3000, verticalPosition: "top" });
        },
        (error)=>{
          console.log(error);
          this.snack.open("Failed to register", "OK", {duration: 3000, verticalPosition: "top" });
        }        
      )
    }
  }

}
