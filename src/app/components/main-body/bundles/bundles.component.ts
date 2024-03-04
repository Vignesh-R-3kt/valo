import { ApiServicesService } from 'src/app/services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss']
})
export class BundlesComponent implements OnInit {

  bundlesList: any;

  constructor(private http: ApiServicesService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.http.fetchAllBundlesData().subscribe((res: any) => {
      this.bundlesList = res.data;
      setTimeout(() => {
        this.loader.close();
      }, 1000)
    })
  }
}
