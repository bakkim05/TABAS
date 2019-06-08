import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-maletas',
  templateUrl: './edit-maletas.component.html',
  styleUrls: ['./edit-maletas.component.css']
})
export class EditMaletasComponent implements OnInit {

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

  sendPost(){

    var jsonPost = {"id":parseInt(this.id.value), "color":this.color.value,
                    "peso":parseInt(this.peso.value),"costo":parseInt(this.costo.value),
                    "estado":this.estado.value, "cedula":this.cedula.value, "bagCart":parseInt(this.bagCart.value)};

    this.http.put("https://tabas.azurewebsites.net/api/maletas",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }

}
