import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit {
  url:string="https://localhost:7212/api/producto";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }



  public getProducts():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/getProducts`);
  }

  public postProduct(producto:Producto):Observable<any>{
    return this.http.post<any>(`${this.url}/postProduct`,producto);
  }

}
