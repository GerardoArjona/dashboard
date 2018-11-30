import { Component, OnInit } from '@angular/core';
import { Card } from './card'

//Http
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.css']
})
export class UserCardInfoComponent implements OnInit {

  Auth: string;
  user: string = "gmeono@miflink.com";
  host: string = "api.miflink.com";
  LoginURL: string = "https://"  + this.host +  "/api/v1/administrador/auth/";
  CardDetailURL: string = "https://"  + this.host +  "/api/v1/administrador/customerservice/card" + "?email=" + this.user;

  statusColor: string;
  statusText: string;

  CardDetail(): boolean {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.LoginURL,
      {
        email: "sergioja@miflink.com",
        password: "Flinkrules10."
      }
      , options).subscribe(data => {
        this.Auth = String("JWT " + String(data.json()['token']));

        headers.append('Authorization', this.Auth);
        let options = new RequestOptions({ headers: headers });

        this.http.get(this.CardDetailURL, options)        
        
          .subscribe(result => {
            const usersJson: any[] = Array.of(result.json());            
            
            console.log("CARD INFO")          
            console.log(usersJson[0].status)          
            console.log(usersJson[0].member_since)
            console.log(usersJson[0].type)
            console.log(usersJson[0].card_number)


            console.log(usersJson[0].no_guia)
            console.log(usersJson[0].active_date)          
            console.log(usersJson[0].month_expired)
            console.log(usersJson[0].year_expired)


            /*                        
            //EXTRAS
            "no_guia": "S/G",                
            "active_date": "2018-05-30",
            "month_expired": "05",                    
            "year_expired": "2023"
            */
            
            
            
            

            return true;
          },
            error => {
              console.log("Error peticion CardDetail");
              return false;
            });
      },
        error => {
          console.log("Error peticion login");
          return false;
        }
      );

      return true;

  }

  card: Card = {
    status: false,
    miembro_desde: '05-05-2018',
    numero_tarjeta: '1111-1111-1111-1111',
    tipo: 'Fisico',
    descripcion: 'Tarjeta Mastercard',
    card_id: 1,
  };

  constructor(private http: Http) {
    this.CardDetail();

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
