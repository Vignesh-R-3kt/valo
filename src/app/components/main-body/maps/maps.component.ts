import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  mapsList: any;
  isDetailsPopupOpen: boolean = false;
  mapUUID: any;
  constructor(private http: ApiServicesService) { }

  ngOnInit(): void {
    this.http.fetchAllMapsData().subscribe((res: any) => {
      this.mapsList = res.data.filter((ele: any) => ele.narrativeDescription);
    });

  }

  openDetailsPopup(data: any) {
    this.isDetailsPopupOpen = true;
    this.mapUUID = data.uuid;
  }

  closePopup(e: any) {
    this.isDetailsPopupOpen = e;
    this.mapUUID = "";
  }

}
