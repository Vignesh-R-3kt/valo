import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss']
})

export class AgentDetailsComponent implements OnInit {
  @Input() uuid: any;
  @Output() changeUUID = new EventEmitter<boolean>;
  agentDetails: any;

  constructor(private http: ApiServicesService) { }

  ngOnInit(): void {
    this.http.fetchSingleAgentDetails(this.uuid).subscribe((res: any) => {
      this.agentDetails = res.data;
    })
  }

  closePopup() {
    this.changeUUID.emit(false);
  }
}
