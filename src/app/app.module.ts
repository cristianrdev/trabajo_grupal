import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';

// import { LoginComponent } from './login/login/login.component';

import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
// import { CarritoComponent } from './carrito/carrito.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginModule } from './login/login.module';
import { CompartidaModule } from './compartida/compartida.module';
import { CompraModule } from './compra/compra.module';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    // CarritoComponent,
    DetalleComponent,
  
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    LoginModule,
    CompartidaModule,
    CompraModule,
    
  
    
  
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
