import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit,OnChanges {
@Input('productSelected')productSelected!:Producto;
  public producto:Producto={
    nombre:'',
    precio:0,
    descripcion:''
  };
  public labelSubmit:string='Add Product';
  public expressionRegular:string="[^a-zA-Z0-9]";
  public formProducto:FormGroup=this.fb.group({
  name:['',[Validators.required]],
  price:[0,[Validators.required]],
  description:['',[Validators.required]]
});

  constructor(private fb:FormBuilder,private productService:ProductoService,
    private router:Router) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
    if(this.productSelected!==undefined){

            this.formProducto.controls['name'].setValue(this.productSelected.nombre);
            this.formProducto.controls['price'].setValue(this.productSelected.precio);
            this.formProducto.controls['description'].setValue(this.productSelected.descripcion);
            this.labelSubmit='Save Changes';
    }
  }

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

  if(this.labelSubmit.includes('Save')){
    alert("Updating...");
      this.productService.putProduct(this.productSelected.id,this.producto).subscribe(res=>{
        if(res.success===200){
          Swal.fire({
            icon: 'success',
            title: 'Product Updated',
            text: res.mensaje
          });
          setTimeout(() => {
              this.router.navigate(['/producto']);
          }, 1500);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res.mensaje
          });
        }
      });
  }else{
    alert("Adding");
  this.productService.postProduct(this.producto).subscribe(res=>{
        console.log("Res",res.success);
        if(res.success===200){
          Swal.fire({
            icon: 'success',
            title: 'Product added',
            text: res.mensaje
          });
          setTimeout(() => {
              this.router.navigate(['/producto']);
          }, 1500);
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



}
