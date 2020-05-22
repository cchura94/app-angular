import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }

  ingresar(datos){
    return this.http.post("https://edtics.herokuapp.com/api/auth/login", datos);
  }
}
