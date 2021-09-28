import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { CarruselComponent } from './compartida/carrusel/carrusel.component';
import { ProductosComponent } from './compartida/productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CarruselComponent,
    ProductosComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
