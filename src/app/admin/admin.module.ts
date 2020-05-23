import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarAdminComponent } from './componentes/navbar-admin/navbar-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaNuevoComponent } from './categoria/categoria-nuevo/categoria-nuevo.component';
import { CategoriaEditarComponent } from './categoria/categoria-editar/categoria-editar.component';
import { ProductoEditarComponent } from './producto/producto-editar/producto-editar.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo/producto-nuevo.component';
import { ProductoListarComponent } from './producto/producto-listar/producto-listar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent, CategoriaComponent, ProductoComponent, ProveedorComponent, NavbarAdminComponent, CategoriaListarComponent, CategoriaNuevoComponent, CategoriaEditarComponent, ProductoEditarComponent, ProductoNuevoComponent, ProductoListarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
