import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  public producto:Producto={
    nombre:'',
    precio:0,
    descripcion:''
  };
  public expressionRegular:string="[^a-zA-Z0-9]";
  public formProducto:FormGroup=this.fb.group({
  name:['',[Validators.required]],
  price:[0,[Validators.required]],
  description:['',[Validators.required]]
});

  constructor(private fb:FormBuilder,private productService:ProductoService) { }

  ngOnInit(): void {
  }
public saveChanges():void{
  if(this.formProducto.invalid || this.formProducto.errors){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There are errors in the form'
    });
    return;
  }

  this.producto.nombre=this.formProducto.controls['name'].value;
  this.producto.precio=this.formProducto.controls['price'].value;
  this.producto.descripcion=this.formProducto.controls['description'].value;

  this.productService.postProduct(this.producto).subscribe(res=>{
        console.log("Res",res.success);
        if(res.success===200){
          Swal.fire({
            icon: 'success',
            title: 'Product added',
            text: res.mensaje
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.mensaje
          });
        }

  });
}
}
