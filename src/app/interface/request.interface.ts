export interface Requests{
  name_Customer:string,
  name_Product:string,
  cantidad:number,
  total:number,
  fechaPedido:Date
}
export interface Pedido{
  IdCliente:number,
  Total:number,
  FechaPedido?:Date,
  LineaPedido?:LineaPedido[]
}



export interface LineaPedido{
  idProducto:number,
  cantidad?:number,
  importeUnitario:number
}
