import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Costumer, CustomerProof, User } from './../interface/costumer.interface';
import { Response } from './../interface/response.interface';
@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  url:string="https://localhost:7212/api/cliente";
  public userLogged:boolean=false;
  constructor( private http:HttpClient) { }

public postCostumer(costumer:Costumer):Observable<Response>{
  return this.http.post<Response>(`${this.url}/postCliente`,costumer);
}
public checkAuthentication():Observable<boolean>{
  if(!localStorage.getItem('token')){
    return of(false);
  }else{
    return of(true);
  }
}
public LoginCostumer(costumer:User):Observable<any>{


  return this.http.post<any>(`${this.url}/login`,costumer);
  /*let headers= new HttpHeaders({
    'Content-Type':'application/json',
    'Email':costumer.Email,
    'Password':costumer.Password
  });
  */
 // return this.http.get<Costumer>(`${this.url}login`,{});

}
public GetAllCustomers():Observable<CustomerProof[]>{
  return this.http.get<CustomerProof[]>(`${this.url}/GetAllClientes`);
}
public UpdateCustomer(id:number,customer:Costumer):Observable<Response>{
  return this.http.put<Response>(`${this.url}/updateCliente/${id}`,customer);
}
public DeleteCustomer(id:number | undefined):Observable<Response>{
return this.http.delete<Response>(`${this.url}/deleteCliente/${id}`)
}
}
