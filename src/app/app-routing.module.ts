import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { LoginComponent } from './components/login/login.component';
import { AgenteComponent } from './components/agente/agente.component';
import { AuthGuard } from './services/guards/auth.guard';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ProductFormUpdateComponent } from './components/product-form-update/product-form-update.component';
import { MakeRequestComponent } from './components/make-request/make-request.component';

const routes: Routes = [
  {
    path:'formulario',component:FormularioComponent
  },
  {
    path:'cliente',component:ClienteComponent
  },
  {
    path:'producto',component:ProductoComponent
  },
  {
    path:'pedidos/:id',component:PedidoComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'agente',component:AgenteComponent
  },
  {
    path:'formProducto',component:FormularioProductoComponent
  }
  ,
  {
    path:'formProductoEdit/:id',component:ProductFormUpdateComponent
  },
  {
    path:'request-module',component:MakeRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
