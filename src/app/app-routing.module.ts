import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CompraComponent } from './pages/compra/compra.component'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"ingresar", component:LoginComponent},
  {path:"registrarse", component:RegistroComponent},
  {path:"detalle/:id",canActivate:[AuthGuard], component:DetalleComponent},
  {path:"compra/:id",canActivate:[AuthGuard], component:CompraComponent},
  {path:"404", component:E404Component},
  {path:"**", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
