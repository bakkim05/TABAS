import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {
  // Informacion recibida del REST
  private VUELOS_DATA = []
  private vuelosObservable : Observable<any[]>;

  // Informacion deplegada en las tablas
  displayedColumns: string[] = ['vuelo','avion'];
  dataSource = new MatTableDataSource(this.VUELOS_DATA);

  // Filtro de busqueda
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Recepcion de informacion del REST
  constructor(private communicationService : CommsService) {
    this.vuelosObservable = this.communicationService.getVuelos();
    this.communicationService.getVuelos().subscribe((res : any[])=>{
      this.VUELOS_DATA = res;
      this.dataSource = new MatTableDataSource(this.VUELOS_DATA);
      console.log(this.VUELOS_DATA);
   })
  }

  ngOnInit() {
  }

}
