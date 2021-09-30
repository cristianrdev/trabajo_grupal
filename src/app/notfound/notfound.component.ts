import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  Accion: string = "Es a punto de realizar cambios en los productos";
  Titulo2: string = "Alerta";
  mensaje: string ="";

  constructor() { }

  ngOnInit(): void {
  }



  capturarVariable(mensaje: any): void {
    console.log("capturarVariable...", mensaje);
    }
}
