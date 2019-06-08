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
  private VUELOS_DATA = []
  private vuelosObservable : Observable<any[]>;

  displayedColumns: string[] = ['vuelo','avion'];
  dataSource = new MatTableDataSource(this.VUELOS_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
