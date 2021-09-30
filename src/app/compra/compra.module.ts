import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { DireccionComponent } from './direccion/direccion.component';
import { PagoComponent } from './pago/pago.component';




@NgModule({
  declarations: [
    CarritoComponent,
    DireccionComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
  ]
})
export class CompraModule { }
