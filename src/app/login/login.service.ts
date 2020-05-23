import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlbase = environment.servidor2

  constructor(protected http: HttpClient) { }

  ingresar(datos){
    return this.http.post(this.urlbase, datos);
  }
}
