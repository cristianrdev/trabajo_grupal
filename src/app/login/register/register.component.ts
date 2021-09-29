import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  passwordConf: string = '';

  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores:string[] = [];

  constructor() {}

  ngOnInit(): void {}

  registrar(): void {
    this.registered = false;
    this.errorRegister = false;
    this.errores = [];
    /* Aqui agregar validaciones */
    if (this.nombre.length < 3 || this.nombre == null) {
      console.log('El Nombre debe tener mínimo 4 caracteres');
      // alert('El Nombre debe tener mínimo 4 caracteres');
      this.errores.push("El Nombre debe tener mínimo 4 caracteres");
      this.errorRegister = true;
      
    }

    if (this.apellido.length < 3 || this.apellido == null) {
      console.log('El Apellido debe tener mínimo 4 caracteres');
      // alert('El Apellido debe tener mínimo 4 caracteres');
      this.errores.push("El Apellido debe tener mínimo 4 caracteres");
      this.errorRegister = true;
      
    }
    if (!this.isEmail(this.email)) {
      console.log('El Correo debe cumplir con un formato válido');
      // alert('El Correo debe cumplir con un formato válido');
      this.errores.push("El Correo debe cumplir con un formato válido");
      
      this.errorRegister = true;
      
    }
    if (this.password!=null && this.password.length < 7) {
      console.log('La contraseña debe tener mínimo 8 caracteres');
      // alert('La contraseña debe tener mínimo 8 caracteres');
      this.errores.push("La contraseña debe tener mínimo 8 caracteres");
      this.errorRegister = true;
      
    }
    if (this.password != this.passwordConf) {
      // alert('La contraseñas no coinciden');
      this.errores.push("La contraseñas no coinciden");
      this.errorRegister = true;
      
    }
    if (!this.errorRegister) {
      this.registered = true;
     
    }

    
  }


  isEmail(email: string) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  
}
