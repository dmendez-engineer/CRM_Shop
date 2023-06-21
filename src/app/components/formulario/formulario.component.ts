import { Component, OnInit,ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import {Swal} from "sweetalert2"

import { Costumer, CustomerProof } from 'src/app/interface/costumer.interface';
import { CostumerService } from 'src/app/services/costumer.service';
import { Response } from './../../interface/response.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  costumer:Costumer={
    Nombre:'',
    Password:'',
    Email:''
  };
  @Input('add') add!:boolean;



  @Input('customerSelected')customerSelected:CustomerProof={
    id:0,
    nombre:'',
    password:'',
    email:'',
    fechaAlta:new Date(),
    fechaBaja:new Date(),
  };

  @Output() changeAdd= new EventEmitter();

  public formCostumer:FormGroup=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  constructor(private fb:FormBuilder,private costumerService:CostumerService, /*private tastService:ToastrService*/) { }

  ngOnInit(): void {

    if(this.customerSelected.id===undefined || this.customerSelected.id===0){

    }else{
      this.formCostumer.controls['name'].setValue(this.customerSelected.nombre);
      this.formCostumer.controls['email'].setValue(this.customerSelected.email);
     // this.formCostumer.controls['password'].setValue(this.customerSelected.password);
    }
  }
  public addCostumer():void{

    this.costumer.Nombre=this.formCostumer.controls['name'].value;
    this.costumer.Email=this.formCostumer.controls['email'].value;
    this.costumer.Password=this.formCostumer.controls['password'].value;
    this.add=true;

    //alert(this.add)

    if(this.customerSelected.id===undefined || this.customerSelected.id===0){

      this.addClient(this.costumer);
    }else{

      this.costumer.Nombre=this.formCostumer.controls['name'].value;
      this.costumer.Email=this.formCostumer.controls['email'].value;
      this.updateCustomer(this.customerSelected.id,this.costumer);
    }

    /*
    this.costumerService.postCostumer(this.costumer).subscribe(res=>{

      if(res.success==200){
        Swal.fire({
          icon: 'success',
          title: 'Customer added',
          text: res.mensaje
        });
        setTimeout(() => {
          this.changeAdd.emit(this.add);
        }, 1500);

      }else{
        Swal.fire({
          icon: 'error',
          title: 'Was not possible to add this costumer',
          text: res.mensaje
        });
      }


    });*/
  }
  public addClient(cutomserP:Costumer){
    this.costumerService.postCostumer(cutomserP).subscribe(res=>{

      if(res.success==200){
        Swal.fire({
          icon: 'success',
          title: 'Customer added',
          text: res.mensaje
        });
        setTimeout(() => {
          this.changeAdd.emit(this.add);
          window.location.reload();
        }, 1500);

      }else{
        Swal.fire({
          icon: 'error',
          title: 'Was not possible to add this costumer',
          text: res.mensaje
        });
      }
      this.add=!this.add;

    });
  }
  public updateCustomer(id:number,customer:Costumer):void{
    this.costumerService.UpdateCustomer(id,customer).subscribe(res=>{

      if(res.success==200){
        Swal.fire({
          icon: 'success',
          title: 'Customer updated',
          text: res.mensaje
        });
        setTimeout(() => {
          this.changeAdd.emit(this.add);
        }, 2500);

      }else{
        Swal.fire({
          icon: 'error',
          title: 'Was not possible to add this costumer',
          text: res.mensaje
        });
      }
      this.add=!this.add;
      window.location.reload();
    });
  }
}
