import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerProof } from 'src/app/interface/costumer.interface';
import { Producto } from 'src/app/interface/producto.interface';
import { LineaPedido, Pedido } from 'src/app/interface/request.interface';
import { CostumerService } from 'src/app/services/costumer.service';
import { ProductoService } from 'src/app/services/producto.service';
import { RequestService } from 'src/app/services/request.service';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control!.value===undefined || isSubmitted);
  }
}

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  public displayedColumns:string[]=['nombre','precio','descripcion','quantity'];
  public quantity:number=0;
  public dataSource:Producto[]=[];
  public subTotal:number=0;
  public updatedArray:LineaPedido[]=[];
  public pedido:Pedido={
    IdCliente:0,
    Total:0
  }
  public linea_pedidos:LineaPedido[]=[];
  public linea_pedidosAuxiliar:LineaPedido[]=[];
  public IdCliente:number=0;
  customers!:CustomerProof[];

  public formRequest:FormGroup=this.fb.group({

  });
  constructor(private serviceCustomer:CostumerService,private fb:FormBuilder,
    private serviceProduct:ProductoService,private requestService:RequestService) { }

  ngOnInit(): void {
    this.serviceCustomer.GetAllCustomers().subscribe(res=>{
      this.customers=res;
    });

    this.serviceProduct.getProducts().subscribe(res=>{
      this.dataSource=res;

      this.dataSource.forEach(p=>{
        p.cantidad=0;
      })

    });


  }
  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  public add(element:any):void{

    element.cantidad++;

      this.linea_pedidos.push({
        idProducto:element.id,
        cantidad:1,
        importeUnitario:element.precio
      });

    this.subTotal=this.subTotal+element.precio;
  }

  public remove(element:any):void{
    if(this.subTotal==0){
      return;
    }
    element.cantidad--;
    this.subTotal=this.subTotal-element.precio
  }
  public done():void{
    this.pedido.IdCliente=this.IdCliente;
    this.pedido.Total=this.subTotal;

    this.linea_pedidos=this.linea_pedidos.sort((x,y)=>x.idProducto - y.idProducto);

    let pedido2=this.adjustArray(this.linea_pedidos);

    this.pedido.LineaPedido=pedido2;
    console.log(this.pedido);
   this.requestService.processRequest(this.pedido).subscribe(res=>{
      if(res.success===200){
        Swal.fire({
          icon: 'success',
          title: 'Sucess',
          text: res.mensaje
        });
      }
   });

  }
  public adjustArray(pedido:any):any{

    let pedidoAuxiliar:any[]=[];
    let pedidoAux=pedido[0];
    let cantidad=0;
    for (let i = 0; i < this.linea_pedidos.length; i++) {

        if(pedidoAux.idProducto===pedido[i].idProducto){
            cantidad++;
        }else{
           pedidoAuxiliar.push({
            idProducto:pedidoAux.idProducto,
            cant:cantidad,
            importeUnitario:pedidoAux.importeUnitario
           });
           cantidad=0;

           pedidoAux=pedido[i];

           i--;
        }
        if(i==pedido.length-1){
          pedidoAuxiliar.push({
            idProducto:pedidoAux.idProducto,
            cant:cantidad,
            importeUnitario:pedidoAux.importeUnitario
           });
        }
    }


    return pedidoAuxiliar;
  }
}
