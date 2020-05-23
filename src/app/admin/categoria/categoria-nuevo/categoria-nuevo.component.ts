import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

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

  constructor(protected categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  guardarCategoria(){
    this.categoriaService.guardar(this.categoriaForm.value).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

}
