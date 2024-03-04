import { ApiServicesService } from 'src/app/services/api-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {

  bundlesList: any;

  constructor(private http: ApiServicesService) { }

  ngOnInit(): void {
    this.http.fetchAllBundlesData().subscribe((res: any) => {
      this.bundlesList = res.data;
    })
  }
}
