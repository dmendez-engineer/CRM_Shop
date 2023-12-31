import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CostumerService } from 'src/app/services/costumer.service';
import { Costumer, CustomerProof } from 'src/app/interface/costumer.interface';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit,OnChanges {

  add:boolean=false;
  public timer:boolean=false;
  customers!:CustomerProof[];
  customerSelected:CustomerProof={};
  dataSource:any;
  displayedColumns: string[] = ['demo-name', 'demo-email', 'demo-date'];
  constructor(private service:CostumerService) { }


  ngOnInit(): void {

    this.service.GetAllCustomers().subscribe(customers=>{
      this.customers=customers;
      this.dataSource= new MatTableDataSource(this.customers);

    });
    setTimeout(() => {
        this.timer=!this.timer;
    }, 1500);


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnChanges",this.add);
  }
  public filter2(event:Event){
    const letter=(event.target as HTMLInputElement).value;
    console.log(letter);
    const customerFiltered=this.customers.filter(c=>c.nombre?.includes("k"));
    console.log("Filter: ",customerFiltered);
    this.customers=customerFiltered;
  }
  public filter(event:Event){

    const letter=(event.target as HTMLInputElement).value;
    this.dataSource.filter=letter.trim().toLowerCase();

  }
  public addCostumer():void{
    this.add=!this.add;
    this.customerSelected={
      id:0,
      nombre:'',
      password:'',
      email:'',
      fechaAlta:new Date(),
      fechaBaja:new Date(),
    };


  //  this.timer=!this.timer;
  }
  public receiveData(add:boolean):void{
    this.add=!add;

    //this.ngOnInit();


  }
  public Update(id:number | undefined):void{
    this.add=!this.add;

    console.log(this.customers);
    console.log("ID: ",id);
  const data=this.customers.find(c=>c.id===id);
    //const data =this.customers.filter(c=>c.id===id);

    this.customerSelected={
      id:data?.id,
      nombre:data?.nombre,
      password:data?.password,
      email:data?.email,
      fechaAlta:data?.fechaAlta,
      fechaBaja:data?.fechaBaja,
    }
    console.log("CUSTOMER to be updated: ",this.customerSelected);

  }
  public delete(id:number | undefined):void{
    if(confirm("Are you sure you want to remove this customer?")){
      this.service.DeleteCustomer(id).subscribe(res=>{

        if(res.success===200){
          Swal.fire({
            icon: 'success',
            title: 'Customer removed',
            text: res.mensaje
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);

        }

      });

    }
    else{
      return;
    }


  }
}
