import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-vuelos',
  templateUrl: './create-vuelos.component.html',
  styleUrls: ['./create-vuelos.component.css']
})
export class CreateVuelosComponent implements OnInit {

  private vuelo = new FormControl('');
  private avion = new FormControl('');


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"vuelo":parseInt(this.vuelo.value), "avion":parseInt(this.avion.value)};

    this.http.post("https://tabas.azurewebsites.net/api/vuelos",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['vuelos']);
  }

}
