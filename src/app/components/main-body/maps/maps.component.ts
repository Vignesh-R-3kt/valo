import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  mapsList: any;
  isDetailsPopupOpen: boolean = false;
  mapUUID: any;
  constructor(private http: ApiServicesService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.http.fetchAllMapsData().subscribe((res: any) => {
      this.mapsList = res.data.filter((ele: any) => ele.narrativeDescription);
      setTimeout(() => {
        this.loader.close();
      }, 1000)
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
