import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-conciliacion',
  templateUrl: './report-conciliacion.component.html',
  styleUrls: ['./report-conciliacion.component.css']
})
export class ReportConciliacionComponent implements OnInit {

  private CONCILIACION_DATA = []
  private conciliacionObservable : Observable<any[]>;

  displayedColumns: string[] = ['numvuelo','tipoavion','capacidad','maletasbagcart','maletasavion'];
  dataSource = new MatTableDataSource(this.CONCILIACION_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private communicationService : CommsService ) {
    this.conciliacionObservable = this.communicationService.getReportMaletas();
    this.communicationService.getReportMaletas().subscribe((res : any[])=>{
      this.CONCILIACION_DATA = res;
      this.dataSource = new MatTableDataSource(this.CONCILIACION_DATA);
      console.log(this.CONCILIACION_DATA);
    })
  }

  ngOnInit() {
  }

}
