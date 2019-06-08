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
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"nombre":this.nombre.value, "apellido":this.apellido.value, "cedula":parseInt(this.cedula.value),"tel":parseInt(this.telefono.value),"correo":this.correo.value, "carnet":this.carnet.value}

    this.http.post("https://tabas.azurewebsites.net/api/clients",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['clientes']);
  }

}
