import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';
import { Requests } from 'src/app/interface/request.interface';
import { RequestService } from 'src/app/services/request.service';
import { CustomerProof } from 'src/app/interface/costumer.interface';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public request:Requests[]=[];
  public requestObject:any;
  constructor(private router:ActivatedRoute,private serviceRequest:RequestService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params["id"]);

    this.serviceRequest.getRequest(this.router.snapshot.params["id"]).subscribe(res=>{
     // this.customerSelected=res;
     this.requestObject=res;



    });
  }


}
