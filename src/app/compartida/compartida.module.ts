import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarruselComponent,
    ProductosComponent
  ],

  exports:[
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarruselComponent,
    ProductosComponent
  ],

  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    
  ]
})

export class CompartidaModule { }
