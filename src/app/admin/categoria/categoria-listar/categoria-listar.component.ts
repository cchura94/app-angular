import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  categorias: any = []

  constructor(protected categoriaService: CategoriaService) { 
    
    this.categoriaService.listar().subscribe(
      (res: any) => {
        console.log(res)
        this.categorias = res.datos
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });

  }

  ngOnInit(): void {
  }
  
  eliminar(id, i){
    this.categoriaService.eliminar(id).subscribe(
      (res: any) => {
        console.log(res)
        this.categorias.splice(i, 1)
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      });

  }

}
