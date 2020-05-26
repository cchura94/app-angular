import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(protected router: Router,protected toastr: ToastrService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      try{
        var dato = JSON.parse(atob(localStorage.getItem("token"))) 
        console.log(dato)
      }catch{
        console.log("Error El Token no es correcto");
        this.toastr.error("Error El Token no es correcto", "ERROR");
        localStorage.clear()                        
      }
     
      
      if(dato){
        return true
      }else{
        this.router.navigate(["/ingresar"])
        return false;
      }
      
  
  }
  
}
