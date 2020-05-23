import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  base = environment.servidor
  reqHeader: HttpHeaders;

  constructor(protected http: HttpClient) {
    var token = JSON.parse(atob(localStorage.getItem("token")))  
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token.access_token
    })
  }

  listar(){
    return this.http.get(`${this.base}categoria`, {headers: this.reqHeader});
  }

  guardar(request){
    return this.http.post(this.base + "categoria", request, {headers: this.reqHeader});
  }

  mostrar(id){
    return this.http.get(this.base +"categoria/"+ id, {headers: this.reqHeader});
  }

  modificar(request, id){
    return this.http.put(this.base +"categoria/"+ id, request, {headers: this.reqHeader});
  }

  eliminar(id){
    return this.http.delete(this.base+ "categoria/"+ id, {headers: this.reqHeader});
  }


}
