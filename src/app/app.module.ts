import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component'
import { ProductoComponent } from './components/producto/producto.component';


import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AgenteComponent } from './components/agente/agente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    SideMenuComponent,
    PedidoComponent,
    LoginComponent,
    FormularioComponent,
    AgenteComponent,
    HeaderComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule
   /* ToastrModule,
    BrowserAnimationsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
