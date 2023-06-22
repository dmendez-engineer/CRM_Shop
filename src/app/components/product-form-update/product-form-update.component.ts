import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.css']
})
export class ProductFormUpdateComponent implements OnInit {

  cargado:boolean=false;
  productSelected:Producto={
    id:'0',
    nombre:'',
    precio:0,
    descripcion:''
  };
  constructor(private _productService:ProductoService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params["id"];

    this._productService.getOneProducto(id).subscribe(res=>{

      this.productSelected=res;
      this.cargado=true;
    });

  }

}
