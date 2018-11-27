import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  buttonState = false;
  isReadOnly = false;
  saveButton = true;
  editButton = false;
  buttonText = 'Editar';
  typeInput = 'password';

  savedUser: User = {
    nombre: 'Gerardo',
    email: 'gerardo.arj15@gmail.com',
    nombre_impreso: 'Gerardo Arjona',
    birth: '12-03-04',
    estado_civil: 'Soltero',
    nombre_madre: 'Juanita',
    dir_envio: 'Av. guanajuato',
    dir_cobro: 'Av. algo',
    telefono: '50505050505',
    user_agent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
    };
  

  constructor() { }

  ngOnInit() {
  }

  onClickButton(){
    if (this.buttonState == true){
      this.isReadOnly = false;
      this.buttonText = 'Guardar';
      this.buttonState = false;
      this.saveButton = true;
      this.editButton = false;
    } else {
      this.buttonState = true;
      this.isReadOnly = true;
      this.buttonText = 'Editar';
      this.saveButton = false;
      this.editButton = true;
    }
  }

}
