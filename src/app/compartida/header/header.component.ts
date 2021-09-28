import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  carro:Producto[] = [];
  // anio: number = new Date().getFullYear();
  // mes: number = new Date().getMonth();
  // dia: number = new Date().getDay();

  agregarcarro(item: any) {
    this.carro.push(item);
    console.log(item)
    console.log("nombre añadido al carro", item.nombre);
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
