import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  weaponsList: any;
  isDetailsPopupOpen: boolean = false;
  weaponUUID: any;

  constructor(private http: ApiServicesService, private loader: LoaderService) {

  }

  ngOnInit(): void {
    this.loader.show();
    this.http.fetchAllWeaponsDetails().subscribe((res: any) => {
      this.weaponsList = res.data;
      setTimeout(() => {
        this.loader.close();
      }, 1000)
    })
  }

  openPopup(data: any) {
    this.isDetailsPopupOpen = true;
    this.weaponUUID = data.uuid
  }

  closePopup(data: any) {
    this.isDetailsPopupOpen = data;
    this.weaponUUID = "";
  }
}
