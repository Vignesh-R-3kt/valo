import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  baseUrl: String = "https://valorant-api.com/v1";

  constructor(private http: HttpClient) { }


  // Get all Agents Details
  fetchAllAgentsData() {
    return this.http.get(`${this.baseUrl}/agents?isPlayableCharacter=true`);
  }

  // Get single Agent Details
  fetchSingleAgentDetails(id: any) {
    return this.http.get(`${this.baseUrl}/agents/${id}`);
  }
}
