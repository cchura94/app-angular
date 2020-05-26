import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-editar',
  templateUrl: './categoria-editar.component.html',
  styleUrls: ['./categoria-editar.component.css']
})
export class CategoriaEditarComponent implements OnInit {

  id: string;
  categoriaForm = new FormGroup(
    {
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('')   
    }    
  )
  
  constructor(protected route: ActivatedRoute,protected categoriaService: CategoriaService,
              protected toastr: ToastrService,
              protected router: Router) { 
    
    this.id = this.route.snapshot.paramMap.get("id");

    this.categoriaService.mostrar(this.id).subscribe(
      (res: any) => {
        
        this.categoriaForm = new FormGroup(
          {
            nombre: new FormControl(res.datos.nombre, Validators.required),
            descripcion: new FormControl(res.datos.descripcion)   
          }    
        )
      }
    )

  }

  ngOnInit(): void {
  }

  modificar(){
    this.categoriaService.modificar(this.categoriaForm.value, this.id).subscribe(
      (res: any) => {
        console.log(res)
        this.toastr.success("Categoria Modificado correctamente", "Mensaje");
        this.router.navigate(["/admin/categoria"])
      },
      (error: any) => {
        this.toastr.error("Error No se modifico la categoria", "Error");
     
      }
    )
  }

}
