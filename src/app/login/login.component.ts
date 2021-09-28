import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
// export class LoginComponent implements OnInit {
export class LoginComponent {
  email: string = '';
  password: string = '';

  logged: boolean = false;
  errorLogged: boolean = false;

  /* Completar esta funcion */
  login() {
    this.logged = false;
    this.errorLogged = false;
    /* console.log('email ==>' + this.password);
    console.log('pass ==>' + this.email); */
    // console.log(this.regexp.test(this.email));

    // if(this.email!=null || this.password!=null){//campos vacíos no nulos?

    //   if(!this.regexp.test(this.email)==true){
    //     alert("ingrese un email valido")}

    // }

    if (!this.isEmail(this.email)) {
      console.log('El Correo debe cumplir con un formato válido');
      this.errorLogged = true;
    }
    if (this.password != '12345678') {
      console.log('La contraseña debe tener 8 caracteres');
      this.errorLogged = true;
    }
    if (!this.errorLogged) this.logged = true;
  }

  constructor() {}

  ngOnInit(): void {}

  isEmail(email: string) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
}
