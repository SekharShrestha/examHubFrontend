import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { LoginService } from './login.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public login: LoginService) {}

  intercept(request: HttpRequest<AnyCatcher>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //add token (localStorage) request
    let authReq = request;
    const token = this.login.getToken();
    if(token!=null){
      authReq = authReq.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
