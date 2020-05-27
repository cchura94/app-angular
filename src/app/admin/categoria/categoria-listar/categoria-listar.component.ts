import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { HttpErrorResponse } from '@angular/common/http';

import * as XLSX from 'xlsx'

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  data: [][]
  categorias_excel: []
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

  cargaArchivo(evt: any){
    /* definir lector de archivos */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if(target.files.length !== 1) throw new Error("No puede cargar multiples archivos");
    const reader: FileReader = new FileReader();
 
    reader.onload = (e: any) => {
      /* leer el libro de trabajo */ 
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      /* agarra la primera hoja */
      const wsname: string = wb.SheetNames[0];      
      const ws: XLSX.WorkSheet = wb.Sheets[wsname]
      console.log(ws);
      /* guardar datos formato json*/ 
      this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}))
      console.log(this.data)
    };    
    reader.readAsBinaryString(target.files[0]);
  }

  exportarArchivo(){
    /* generar una hoja de trabajo */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    /* generar libro de trabajo y agregar la hoja de trabajo */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* guardar en archivo */
    XLSX.writeFile(wb, 'categorias.xlsx');
  }

  exportarArchivoCategorias(){
    for (let i = 0; i < this.categorias.length; i++) {
      const fila = this.categorias[i];
      var arreglo = [
        [fila.nombre, fila.descripcion]
      ]; 
    }


    /* generar una hoja de trabajo */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(arreglo);
    /* generar libro de trabajo y agregar la hoja de trabajo */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* guardar en archivo */
    XLSX.writeFile(wb, 'categorias.xlsx');
  }

}
