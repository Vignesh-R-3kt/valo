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

  // Get all maps details
  fetchAllMapsData() {
    return this.http.get(`${this.baseUrl}/maps`);
  }

  // Get single map details
  fetchSingleMapDetails(id: any) {
    return this.http.get(`${this.baseUrl}/maps/${id}`);
  }

  // Get all weapons details
  fetchAllWeaponsDetails() {
    return this.http.get(`${this.baseUrl}/weapons`);
  }

  // Get single weapon details
  fetchSingleWeaponDetails(id: any) {
    return this.http.get(`${this.baseUrl}/weapons/${id}`);
  }

  // Get all bundles data
  fetchAllBundlesData() {
    return this.http.get(`${this.baseUrl}/bundles`);
  }
}
