import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { E404Component } from './pages/e404/e404.component';

import { MenuComponent } from './components/menu/menu.component';
import { ProductoComponent } from './components/producto/producto.component';
import { Producto2Component } from './components/producto2/producto2.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    ProductoComponent,
    Producto2Component,
    DetalleComponent,
    E404Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
