import { Component, OnInit } from '@angular/core';
import { Card } from './card'

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.css']
})
export class UserCardInfoComponent implements OnInit {

  statusColor: string;
  statusText: string;

  card: Card = {
    status: false,
    miembro_desde: '05-05-2018',
    numero_tarjeta: '1111-1111-1111-1111',
    tipo: 'Fisico',
    descripcion: 'Tarjeta Mastercard',
    card_id: 1,
  };

  constructor() {
    if(this.card.status){
      this.statusColor = 'active'
      this.statusText = 'Activo'
    }else{
      this.statusColor = 'inactive'
      this.statusText = 'Inactivo'
    }
   }

  ngOnInit() {
  }

}
