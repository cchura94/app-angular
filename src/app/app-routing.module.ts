import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PruebaComponent } from './prueba/prueba.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
//import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: "contacto",
        component: ContactoComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'cristian',
        component: PruebaComponent
      },
      {
        path: 'ventas',
        component: CarritoComponent
      },
      {
        path: 'ingresar',
        component: LoginComponent
      },
    ]
  },
  
  {
    path: 'admin',
    //component: AdminComponent,
    //loadChildren: './admin/admin.module#AdminModule'
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
