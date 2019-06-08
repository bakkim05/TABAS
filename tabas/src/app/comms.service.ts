import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  constructor(private http : HttpClient) {
    // this.getData().subscribe(data => {
    //   console.log('comms',data)
    // });    
  }

  // public getData(){
  //   return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts')
  //   //return this.http.get('https://my-json-server.typicode.com/bakkim05/clientes/clientes')
  //   .subscribe(data => { console.log(data) })
  // }

  public getClientes(){
    // return this.http.get<any[]>('https://my-json-server.typicode.com/bakkim05/clientes/clientes');
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/clients');

  }

  public getMaletas(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/bags');
  }

  public getBagCarts(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/bagCart');
  }

  public getUsers(){
    return this.http.get<any[]>('https://my-json-server.typicode.com/bakkim05/clientes/users');
  }

  public getVuelos(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/vuelos');
  }

  public getReportClientes(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/bags/users');
  }

  public getReportMaletas(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/bags/conciliacion');
  }

}
