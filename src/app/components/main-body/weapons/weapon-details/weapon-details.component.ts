import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss']
})
export class WeaponDetailsComponent implements OnInit {

  @Input() uuid: any;
  @Output() closePopup = new EventEmitter<boolean>;
  weaponDetails: any;


  constructor(private http: ApiServicesService) { }

  ngOnInit(): void {
    this.http.fetchSingleWeaponDetails(this.uuid).subscribe((res: any) => {
      this.weaponDetails = res.data;
    })
  }

  close() {
    this.closePopup.emit(false);
  }

}
