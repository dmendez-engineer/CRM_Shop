import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requests } from './../interface/request.interface';
import { Response } from './../interface/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url:string="https://localhost:7212/api/request";
  constructor(private http:HttpClient) { }


  public getRequest(id:number | undefined):Observable<Requests[]>{
    return this.http.get<Requests[]>(`${this.url}/getRequest/${id}`);
  }
  public processRequest(pedido:any):Observable<Response>{
    return this.http.post<Response>(`${this.url}/processingRequest`,pedido);
  }
}
