import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  buttonText = 'Editar';
  buttonState = true;
  typeInput = 'password';
  isReadOnly = true;
  savedUser: User = {
    nombre: 'Gerardo',
    email: 'gerardo.arj15@gmail.com',
    password: '123456'
  };
  liveUser: User = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onClickButton(nombre){
    console.log(nombre);
    if (this.buttonState == true){
      this.isReadOnly = false;
      this.buttonText = 'Guardar';
      this. typeInput = 'text'
      this.buttonState = false;
    } else {
      this.buttonState = true;
      this.isReadOnly = true;
      this.typeInput = 'password';
      this.buttonText = 'Editar';
    }
  }

}
