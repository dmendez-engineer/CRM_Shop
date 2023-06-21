import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router);
  }

}
