import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto.interface';

import { Response } from './../interface/response.interface';


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
  public getOneProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/getOneProducto/${id}`);
  }
  public postProduct(producto:Producto):Observable<any>{
    return this.http.post<any>(`${this.url}/postProduct`,producto);
  }
  public putProduct(id:string | undefined,p:Producto):Observable<Response>{
    return this.http.put<Response>(`${this.url}/putProducto/${id}`,p);
  }
  public deleteProduct(id:string | undefined):Observable<Response>{
    return this.http.delete<Response>(`${this.url}/deleteProduct/${id}`);
  }

}
