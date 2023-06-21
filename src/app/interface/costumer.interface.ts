export interface Costumer{
  Id?:number;
  Nombre:string;
  Password:string;
  Email:string;
  FechaAlta?:Date;
  FechaBaja?:Date;
}
export interface User{

  Password:string,
  Email:string,
  TipoUsuario?:string
}
export interface CustomerProof{
  id?:number;
  nombre?:string;
  password?:string;
  email?:string;
  fechaAlta?:Date;
  fechaBaja?:Date;
}
