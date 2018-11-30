import { Component, OnInit } from '@angular/core';
import { User } from './user';

//Http
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions, Headers } from '@angular/http';
import { Http } from '@angular/http';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  Auth: string;
  user: string = "gmeono@miflink.com";
  host: string = "api.miflink.com";
  LoginURL: string = "https://"  + this.host +  "/api/v1/administrador/auth/";
  UserDetailURL: string = "https://"  + this.host +  "/api/v1/administrador/customerservice/personal_info" + "?email=" + this.user;


  buttonState = false;
  isReadOnly = false;
  saveButton = true;
  editButton = false;
  buttonText = 'Editar';
  typeInput = 'password';


  UserDetail(): boolean {

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

        this.http.get(this.UserDetailURL, options)        
        
          .subscribe(result => {
            const usersJson: any[] = Array.of(result.json());

            console.log("USER INFO")          
            console.log(usersJson[0].name)          
            console.log(usersJson[0].last_name)
            console.log(usersJson[0].mother_name)
            console.log(usersJson[0].email)
            console.log(usersJson[0].birthday)
            console.log(usersJson[0].marital_status)
            console.log(usersJson[0].delivery_address)
            console.log(usersJson[0].billing_address)
            console.log(usersJson[0].cel_number)

            // TODO:falta user agent
            
            
            

            return true;
          },
            error => {
              console.log("Error peticion UserDetail");
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
  

 constructor(private http: Http) {
    this.UserDetail();
  }

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
