import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';

const ADD_PRODUCT=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

`;
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos:Producto[]=[];
  public timer:boolean=false;
  constructor(private service:ProductoService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconLiteral('addProduct', sanitizer.bypassSecurityTrustHtml(ADD_PRODUCT));

   }

  ngOnInit(): void {
    setTimeout(() => {
        this.timer=true;
    }, 1500);

    this.service.getProducts().subscribe(res=>{
      console.log("Products's response",res);
      this.productos=res;
    });

  }
  public delete(id:string | undefined):void{
   if(confirm("Are you sure you want to remove this product?")){
    this.service.deleteProduct(id).subscribe(res=>{
      if(res.success===200){
          Swal.fire({
            icon: 'success',
            title: 'Removed',
            text: res.mensaje
          });

          this.service.getProducts().subscribe(res=>{
            console.log("Products's response",res);
            this.productos=res;
          });
          return;
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res.mensaje
        });
      }
    });
   }else{
    return;
   }
  }

}
