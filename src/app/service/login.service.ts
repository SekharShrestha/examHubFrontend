import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //current logged in user (principal)
  public getCurrentLoggedInUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }

  //generate token
  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  
  //setting token in local
  public loginUser(token: any){
    localStorage.setItem("token", token);
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem("token");
  }

  //store principal's details
  public principal(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  //get principal
  public getPrincipal(){
    let user = localStorage.getItem("user");
    if(user!=null){
      return JSON.parse(user);
    }
    else{
      //logout non existent user
      this.logout();
      return null;
    }
  }

  //get principal's role
  public getPrincipalRole(){
    let user = this.getPrincipal();
    return user.authorities[0].authority;
  }


  //check if user is logged in
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout by removing token frm local
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //user's details set here in localStorage
  public setPrincipal(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  
}
