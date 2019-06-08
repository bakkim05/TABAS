import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {

  private nombre = new FormControl('');
  private apellido = new FormControl('');
  private cedula = new FormControl('');
  private telefono = new FormControl('');
  private correo = new FormControl('');
  private carnet = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
   /**
    * Creates a JSON structure to be sent.
    */
  createJSON(){
    var sent : any = {};

    sent.cliente = {};
    sent.cliente.nombre = this.nombre.value;
    sent.cliente.apellido = this.apellido.value;
    sent.cliente.cedula = parseInt(this.cedula.value);
    sent.cliente.tel = this.telefono.value;
    sent.cliente.correo = this.correo.value;
    sent.cliente.carnet = this.carnet.value;

    console.log(sent);


    return sent;
  }

  hardcoded = "{\"nombre\":\"Jung\",\"tel\":\"993-975-6320\",\"correo\":\"twaddington9@aol.com\",\"carnet\":\"532-98-4556\",\"apellido\":\"Bak\",\"cedula\":1239451438}"
  pleasework = "is it working?"


  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){
    /**
     * Construye los headers necesarios para el REST service
     */
    const httpOptions = {
       headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        // 'Origin' : 'http://www.facebook.com',
        'Access-Control-Allow-Origin' : 'true'
        // 'Access-Control-Allow-Headers' : '*',
        // 'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
       })
    };

    // this.http.post("https://tabas.azurewebsites.net/api/clients",this.createJSON(),httpOptions)
    //   .toPromise()
    //   .then(data => {
    //     console.log(data);
    //   });

    this.http.post("http://localhost:1337/tabas.azurewebsites.net/api/clients/",this.createJSON())
      .toPromise()
      .then(data => {
        console.log(data);
      });


    

    // this.router.navigate(['clientes']);
  }

}
