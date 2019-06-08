import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent implements OnInit {

  // Inicializacion de variables del foro
  private nombre = new FormControl('');
  private apellido = new FormControl('');
  private cedula = new FormControl('');
  private telefono = new FormControl('');
  private correo = new FormControl('');
  private carnet = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

// Envia el JSON al servidor REST
  sendPost(){


    var jsonPost = {"nombre":this.nombre.value, "apellido":this.apellido.value, "cedula":parseInt(this.cedula.value),"tel":parseInt(this.telefono.value),"correo":this.correo.value, "carnet":this.carnet.value}

    this.http.put("https://tabas.azurewebsites.net/api/clients",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['clientes']);
  }


}
