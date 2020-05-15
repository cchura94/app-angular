import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  titulo: String = "Prueba"
  estado: boolean
  numero: number
  clientes: any = [] 
  productos: any = []
  carrito: any = []
  total: number = 0;

  productoForm = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(''),
    descripcion: new FormControl(''),
  });

  constructor() { 
    this.titulo = "Venta de Productos";
    this.estado = true
    this.numero = 50
    //Adicionando Clientes
    this.clientes.push("Juan Perez Seras");
    this.clientes.push("Osacar Quisbert Seras");
    this.clientes.push("Simon Seras"); 

    this.productos.push(
      {
        nombre: "Televisor",
        precio: 3670.98,
        cantidad: 12,
        descripcion: "TV"
      }
    )
    this.productos.push({nombre: "Mesa", precio: 400.98,cantidad: 6,descripcion: "mesa e madera"})
    this.productos.push({nombre: "Escritorio", precio: 550,cantidad: 8,descripcion: "escritorio de oficina"})   
    
  }

  ngOnInit(): void {
  }

  addCarrito(p){

    if(this.buscar(p)){
      for (let i = 0; i < this.carrito.length; i++) {
        const element = this.carrito[i];
        if(element.nombre == p.nombre){
          element.cantidad++;
          this.total += element.precio;
        }      
      }

    }else{
      this.carrito.push({
        nombre: p.nombre,
        precio: p.precio,
        cantidad: 1,
        subtotal: p.precio
      })
      this.total += p.precio;
    }    
    p.cantidad--;
  }

  buscar(p: any) {
    var x = false;
    for (let i = 0; i < this.carrito.length; i++) {
      const element = this.carrito[i];
      if(element.nombre == p.nombre){
        x = true;
      }      
    }
    return x;    
  }

  addProducto(){
    this.productos.push(this.productoForm.value)
  }

}
