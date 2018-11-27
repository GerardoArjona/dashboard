import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.css']
})
export class UserPurchasesComponent implements OnInit {

  purchases = [
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxdnkdjksdkdjksjdkxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    },
    {
      fecha: '07-15-2016',
      monto: '1004',
      descripcion: 'Pago oxxo'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
