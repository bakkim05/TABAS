import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  // JSON recibido del REST
  private CLIENTES_DATA = []
  private clientesObservable : Observable<any[]>;

  //informacion de la tabla
  displayedColumns: string[] = ['nombre','apellido','cedula','tel','correo','carnet'];
  dataSource = new MatTableDataSource(this.CLIENTES_DATA);

  // Informacion recibida del filtro
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Recepcion de informacion del REST
  constructor(private communicationService : CommsService ) {
    this.clientesObservable = this.communicationService.getClientes();
    this.communicationService.getClientes().subscribe((res : any[])=>{
      this.CLIENTES_DATA = res;
      this.dataSource = new MatTableDataSource(this.CLIENTES_DATA);
      console.log(this.CLIENTES_DATA);
    })

  }

  ngOnInit() {

  }

}
