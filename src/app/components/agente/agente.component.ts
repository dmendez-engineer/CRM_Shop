import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  public timer:boolean=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
        this.timer=!this.timer;
    }, 1500);
  }

}
