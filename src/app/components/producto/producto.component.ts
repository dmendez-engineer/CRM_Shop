import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos:Producto[]=[];
  public timer:boolean=false;
  constructor(private service:ProductoService) { }

  ngOnInit(): void {
    setTimeout(() => {
        this.timer=true;
    }, 1500);

    this.service.getProducts().subscribe(res=>{
      console.log("Products's response",res);
      this.productos=res;
    });

  }

}
