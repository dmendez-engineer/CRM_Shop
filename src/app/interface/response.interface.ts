import { CustomerProof } from "./costumer.interface";

export interface Response{
  success:number,
  mensaje:string,
  cliente?:CustomerProof,
  token?:string
}
