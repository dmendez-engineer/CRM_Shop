import { NgModule } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormControl,FormGroupDirective,NgForm,Validators,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component'
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ProductFormUpdateComponent } from './components/product-form-update/product-form-update.component';
import { MakeRequestComponent } from './components/make-request/make-request.component';


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
import {ErrorStateMatcher} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';


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
    FormularioProductoComponent,
    ProductFormUpdateComponent,
    MakeRequestComponent
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
    MatSelectModule,
    NgIf,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,


   /* ToastrModule,
    BrowserAnimationsModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
