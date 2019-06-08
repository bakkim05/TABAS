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
    * Creates a JSON structure to be sent.
    */
  createJSON(){
    var sent : any = {};

    sent.vuelos = {};
    sent.vuelos.vuelo = parseInt(this.vuelo.value);
    sent.vuelos.avion = parseInt(this.avion.value);

    return sent;
  }

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
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
      })
    };

    this.http.post("http://httpbin.org/post",this.createJSON(),httpOptions)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['vuelos']);
  }

}
