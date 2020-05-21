import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component'
import { CategoriaNuevoComponent } from './categoria/categoria-nuevo/categoria-nuevo.component'
import { CategoriaEditarComponent } from './categoria/categoria-editar/categoria-editar.component'

import { ProductoComponent } from './producto/producto.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo/producto-nuevo.component';
import { ProductoEditarComponent } from './producto/producto-editar/producto-editar.component';
import { ProductoListarComponent } from './producto/producto-listar/producto-listar.component';

import { ProveedorComponent } from './proveedor/proveedor.component';


import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'categoria',
        component: CategoriaComponent,
        children: [
          {
            path: '',
            component: CategoriaListarComponent
          },
          {
            path: 'nuevo',
            component: CategoriaNuevoComponent
          },
          {
            path: ':id/editar',
            component: CategoriaEditarComponent
          }            

        ]
      },
      {
        path: 'proveedor',
        component: ProveedorComponent
      },
      {
        path: 'producto',
        component: ProductoComponent,
        children: [
          {
            path: '',
            component: ProductoListarComponent
          },
          {
            path: 'nuevo',
            component: ProductoNuevoComponent
          },
          {
            path: ':id/editar',
            component: ProductoEditarComponent
          }
        ]
      }
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
