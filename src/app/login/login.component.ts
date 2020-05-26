import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { Router } from '@angular/router';
	
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  )

  constructor(protected loginServicio: LoginService, 
              protected route: Router,
              protected toastr: ToastrService) { }

  ngOnInit(): void {
  }

  iniciar_sesion(){
    this.loginServicio.ingresar(this.loginForm.value)
                      .subscribe((res: any) => {
                        console.log(res);
                        localStorage.setItem("token", btoa(JSON.stringify(res)))

                        this.toastr.success("Sesion iniciada correctamente", "Mensaje");
                        this.route.navigate(['/admin'])                      
                      },(error) => {
                        console.log("error");
                        if(error.status == 401){
                          console.log("Error");
                          this.toastr.error("Los datos son incorrecto", "Advertencia");
                        }
                      })
  }

}
