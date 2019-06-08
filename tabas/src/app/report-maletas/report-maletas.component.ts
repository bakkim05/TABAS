import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-maletas',
  templateUrl: './report-maletas.component.html',
  styleUrls: ['./report-maletas.component.css']
})
export class ReportMaletasComponent implements OnInit {

  private MxC_DATA = []
  private MxCObservable : Observable<any[]>;

  displayedColumns: string[] = ['nombre','apellido','cedula','cantMaletas'];
  dataSource = new MatTableDataSource(this.MxC_DATA);

  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private communicationService : CommsService ) {
    this.MxCObservable = this.communicationService.getReportClientes();
    this.communicationService.getReportClientes().subscribe((res : any[])=>{
      this.MxC_DATA = res;
      this.dataSource = new MatTableDataSource(this.MxC_DATA);
      console.log(this.MxC_DATA);
    })

  }

  ngOnInit() {
  }

}
