import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.scss']
})
export class MapDetailsComponent implements OnInit {

  @Input() uuid: any;
  @Output() closePopup = new EventEmitter<boolean>();
  mapDetails: any;

  constructor(private http: ApiServicesService) {
  }

  ngOnInit(): void {
    this.http.fetchSingleMapDetails(this.uuid).subscribe((res: any) => {
      this.mapDetails = res.data;
      console.log(this.mapDetails);

    })
  }

  close() {
    this.closePopup.emit(false);
  }

}
