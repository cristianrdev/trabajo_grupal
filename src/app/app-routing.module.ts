import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './compartida/footer/footer.component';
import { ProductosComponent } from './compartida/productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
//referencias a los componentes
const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotfoundComponent},
    

    // {path: '/nombre_ruta', component: El componente},
    
];

// decorador: no olvidar importar
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }
