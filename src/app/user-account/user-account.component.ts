import { Component, OnInit } from '@angular/core';
import { Account } from './account'

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  cuenta: Account = {
    futuro: "12345677",
    prepagado: "12345677",
    abierto: "12345677",
    disponible: "12345677",
    a_pagar: "12345677",
    neto_disponible: "12345677",
    limite_credito: "12345677",
    limite_retiro: "12345677"
  };

  constructor() {
   }

  ngOnInit() {
  }
}
