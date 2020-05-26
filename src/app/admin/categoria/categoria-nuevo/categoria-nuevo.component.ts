import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-nuevo',
  templateUrl: './categoria-nuevo.component.html',
  styleUrls: ['./categoria-nuevo.component.css']
})
export class CategoriaNuevoComponent implements OnInit {

  categoriaForm = new FormGroup(
    {
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('')   
    }    
  )

  constructor(protected categoriaService: CategoriaService,
              protected toastr: ToastrService,
              protected router: Router) { }

  ngOnInit(): void {
  }

  guardarCategoria(){
    this.categoriaService.guardar(this.categoriaForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.toastr.success("Categoria Registrado correctamente", "Mensaje");
        this.router.navigate(["/admin/categoria"])
      },
      (error: any) => {
        this.toastr.error("Error No se guardo la categoria", "Error");
     
      }
    )
  }

}
