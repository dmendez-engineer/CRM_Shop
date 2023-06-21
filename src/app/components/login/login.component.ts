import { Component, ElementRef, OnInit, ViewChild,Output,Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Costumer, User } from 'src/app/interface/costumer.interface';
import { CostumerService } from 'src/app/services/costumer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public msj:string='';
  public loginInvalido:boolean=false;
  public user:User={
    Email:'',
    Password:''
  };

  public loginForm:FormGroup=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    userType:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder,private costumerService:CostumerService,private route:Router) { }

  //@ViewChild('hola') pruebaTexto!:ElementRef;
  @Input()tipoUsuario= new EventEmitter();

  ngOnInit(): void {
  }
  public Ruteo():void{


  }
  public login():void{
  //  console.log("RESPUESTA DEL LOGIN: ");
    this.user.Email=this.loginForm.controls['email'].value;
    this.user.Password=this.loginForm.controls['password'].value;
    this.user.TipoUsuario=this.loginForm.controls["userType"].value;



    this.costumerService.LoginCostumer(this.user).subscribe(res=>{

      if(this.loginForm.invalid || this.loginForm.errors){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'The credentials are incorrect'
        });
        return;
      }
      console.log("RESPUESTA: ",res);
      if(res.cliente.id==404){

        this.loginInvalido=true;
        this.msj="Las credenciales son incorrectas";
      }else{
        this.route.navigate(["/agente"]);
        this.loginInvalido=false;
       // this.user.TipoUsuario=='Agent'?this.tipoUsuario.emit(1):this.tipoUsuario.emit(0);
      }
    });
  }

}
