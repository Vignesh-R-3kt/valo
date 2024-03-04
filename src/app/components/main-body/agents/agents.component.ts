import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agentsList: any = [];
  isAgentDetailsOpen: boolean = false;
  uuid: any;

  constructor(private api: ApiServicesService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.show();
    this.api.fetchAllAgentsData().subscribe((res: any) => {
      this.agentsList = res.data.reverse();
      setTimeout(() => {
        this.loader.close();
      }, 1000)
    })
  }

  openAgentDetails(data: any) {
    this.isAgentDetailsOpen = true;
    this.uuid = data.uuid;
  }

  closePopup(data: any) {
    this.isAgentDetailsOpen = data;
    this.uuid = "";
  }
}
