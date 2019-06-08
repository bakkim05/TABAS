import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

declare let jsPDF;

@Component({
  selector: 'app-create-maletas',
  templateUrl: './create-maletas.component.html',
  styleUrls: ['./create-maletas.component.css']
})
export class CreateMaletasComponent implements OnInit {
  // inicializacion de variables del foro
  private id = new FormControl('');
  private color = new FormControl('');
  private peso = new FormControl('');
  private costo = new FormControl('');
  private estado = new FormControl('');
  private cedula = new FormControl('');
  private bagCart = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"bagID":parseInt(this.id.value), "color":this.color.value,
                    "peso":parseInt(this.peso.value),"costo":parseInt(this.costo.value),
                    "estado":this.estado.value, "clientid":this.cedula.value, "id":parseInt(this.bagCart.value)};

    this.http.post("https://tabas.azurewebsites.net/api/maletas",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['maletas']);
  }

}
