import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req, next){
  	var token = JSON.parse(atob(localStorage.getItem("token")))
  	let tokenizedReq = req.clone({
  		setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token.access_token
      }
  	})
  	return next.handle(tokenizedReq);
  }
}
