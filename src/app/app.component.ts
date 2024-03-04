import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loaderStatus: boolean;

  constructor(private loader: LoaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loader.getStatus().subscribe((res: boolean) => {
      this.loaderStatus = res;
      this.cdr.detectChanges();
    })
  }
}
