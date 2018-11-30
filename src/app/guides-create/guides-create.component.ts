import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides-create',
  templateUrl: './guides-create.component.html',
  styleUrls: ['./guides-create.component.css']
})
export class GuidesCreateComponent implements OnInit {

  searchText : string;
  clickedFive: string;
  clickedTen: string;
  clickedTwenty: string;
  orderFondeo = 'asc';
  fondeoArrow = 'minus';
  orderUsuario = 'asc';
  usuarioArrow = 'minus';
  orderFecha = 'asc';
  fechaArrow = 'minus';
  guias = [];
  paginate_five = false;
  paginate_ten = false;
  paginate_twenty = false;
  begin = 0;
  end = 0;


  obtainedGuias = [
    {
      usuario: 'Gerardo Arjona 1',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2018',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 2',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2017',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 10',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 785',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Fernando Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 3',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjonan 90',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona Jimenez',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 21',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona Fernandez',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona Perez',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2018',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona Armando',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 89',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Maritimo',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona 87',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '1',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2012',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '20003',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '2000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
    {
      usuario: 'Gerardo Arjona',
      direccion: 'Av. Morelos 253',
      fondeo: '3000',
      tipo_envio: 'Terrestre',
      embosado: 'dhskjhdkjshd',
      fecha_solicitud: '07-15-2016',
      fecha_envio: '',
      fecha_esperada: '',
      num_guia: ''
    },
  ];

  constructor() {
    this.guias = this.obtainedGuias;

   }

  ngOnInit() {
  }

  sortByFondeo(){
    this.fondeoArrow="minus"
    if(this.orderFondeo == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) < parseInt(this.guias[j+1].fondeo)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFondeo='des'
      this.fondeoArrow = 'arrow-up'
      this.usuarioArrow = 'minus';
      this.fechaArrow = 'minus';
    }else if(this.orderFondeo == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(parseInt(this.guias[j].fondeo) > parseInt(this.guias[j+1].fondeo)){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFondeo = 'asc'
      this.fondeoArrow = 'arrow-down'
      this.usuarioArrow = 'minus';
      this.fechaArrow = 'minus';
    }
  }

  sortByFecha(){
    this.fechaArrow='minus'
    if(this.orderFecha == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_solicitud);
          let d2 = new Date(this.guias[j+1].fecha_solicitud);
          if(d1 < d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFecha='des'
      this.fechaArrow = 'arrow-up'
      this.usuarioArrow = 'minus';
      this.fondeoArrow = 'minus';
    }else if(this.orderFecha == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          let d1 = new Date(this.guias[j].fecha_solicitud);
          let d2 = new Date(this.guias[j+1].fecha_solicitud);
          if(d1 > d2){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderFecha = 'asc'
      this.fechaArrow = 'arrow-down'
      this.usuarioArrow = 'minus';
      this.fondeoArrow = 'minus';
    }
  }

  sortByUsuario(){
    this.usuarioArrow='minus'
    if(this.orderUsuario == 'asc'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){ 
          if(this.guias[j].usuario < this.guias[j+1].usuario){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderUsuario='des'
      this.usuarioArrow = 'arrow-up'
      this.fondeoArrow = 'minus'
      this.fechaArrow = 'minus'
    }else if(this.orderUsuario == 'des'){
      for(let i=0; i<this.guias.length; i++){
        for(let j=0; j<this.guias.length-i-1; j++){
          if(this.guias[j].usuario > this.guias[j+1].usuario){
            let temp = {
              usuario : this.guias[j].usuario,
              direccion : this.guias[j].direccion,
              fondeo : this.guias[j].fondeo,
              tipo_envio : this.guias[j].tipo_envio,
              embosado : this.guias[j].embosado,
              fecha_solicitud : this.guias[j].fecha_solicitud,
              fecha_envio : this.guias[j].fecha_envio,
              fecha_esperada : this.guias[j].fecha_esperada,
              num_guia : this.guias[j].num_guia
            }

            this.guias[j].usuario = this.guias[j+1].usuario
            this.guias[j].direccion = this.guias[j+1].direccion
            this.guias[j].fondeo = this.guias[j+1].fondeo
            this.guias[j].tipo_envio = this.guias[j+1].tipo_envio
            this.guias[j].embosado = this.guias[j+1].embosado
            this.guias[j].fecha_solicitud = this.guias[j+1].fecha_solicitud
            this.guias[j].fecha_envio = this.guias[j+1].fecha_envio
            this.guias[j].fecha_esperada = this.guias[j+1].fecha_esperada
            this.guias[j].num_guia = this.guias[j+1].num_guia

            this.guias[j+1].usuario = temp.usuario
            this.guias[j+1].direccion = temp.direccion
            this.guias[j+1].fondeo = temp.fondeo
            this.guias[j+1].tipo_envio = temp.tipo_envio
            this.guias[j+1].embosado = temp.embosado
            this.guias[j+1].fecha_solicitud = temp.fecha_solicitud
            this.guias[j+1].fecha_envio = temp.fecha_envio
            this.guias[j+1].fecha_esperada = temp.fecha_esperada
            this.guias[j+1].num_guia = temp.num_guia
          }
        }
      }
      this.orderUsuario='asc'
      this.usuarioArrow = 'arrow-down'
      this.fondeoArrow = 'minus'
      this.fechaArrow = 'minus'
    }
  }

  paginateFive(){
    this.paginate_five = true
    this.paginate_ten = false
    this.paginate_twenty = false
    if(this.end != 5){
      this.clickedFive = "clicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = 5
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  paginateTen(){
    this.paginate_five = false
    this.paginate_ten = true
    this.paginate_twenty = false
    if(this.end != 10){
      this.clickedTen = "clicked";
      this.clickedFive = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = 10
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  paginateTwenty(){
    this.paginate_five = false
    this.paginate_ten = false
    this.paginate_twenty = true
    if(this.end != 20){
      this.clickedTwenty = "clicked";
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.begin = 0
      this.end = 20
    }else{
      this.clickedFive = "unclicked";
      this.clickedTen = "unclicked";
      this.clickedTwenty = "unclicked";
      this.begin = 0
      this.end = this.obtainedGuias.length;
    }
    this.guias = this.obtainedGuias.slice(this.begin, this.end)
  }

  nextPage(){
    if(this.paginate_five){
      this.begin += 5
      this.end += 5
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin -= 5
        this.end -= 5
      }
    }else if(this.paginate_ten){
      this.begin += 10
      this.end += 10
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin -= 10
        this.end -= 10
      }
    }else if(this.paginate_twenty){
      this.begin += 20
      this.end += 20
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin -= 20
        this.end -= 20
      }
    }
  }

  previousPage(){
    if(this.paginate_five){
      this.begin -= 5
      this.end -= 5
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 5
        this.end += 5
      }
    }else if(this.paginate_ten){
      this.begin -= 10
      this.end -= 10
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 10
        this.end += 10
      }
    }else if(this.paginate_twenty){
      this.begin -= 20
      this.end -= 20
      if(this.obtainedGuias.slice(this.begin, this.end).length != 0){
        this.guias = this.obtainedGuias.slice(this.begin, this.end)
      }else{
        this.begin += 20
        this.end += 20
      }
    }
  }

}
