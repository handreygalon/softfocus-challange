import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllCropLossCommunications() : Observable<any> {
    return this.http.get(this.baseUrl + 'communication/', {headers: this.httpHeaders});
  };

  getCropLossCommunications(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'communication/' + id + '/', {headers: this.httpHeaders});
  };

  updateCropLossCommunications(comm) : Observable<any> {
    let body = {
      name: comm.name,
      email: comm.email,
      cpf: comm.cpf,
      latitude: comm.latitude,
      longitude: comm.longitude,
      cultivation: comm.cultivation,
      event: comm.event,
      harvestDate: comm.harvestDate
    };
    return this.http.put(this.baseUrl + 'communication/' + comm.id + '/', body, {headers: this.httpHeaders});
    //return this.http.put(this.baseUrl + 'communication/' + comm.id + '/', comm, {headers: this.httpHeaders});
  };

  saveNewCropLossCommunication(comm) : Observable<any> {
    let body = {
      name: comm.name,
      email: comm.email,
      cpf: comm.cpf,
      latitude: parseInt(comm.latitude),
      longitude: parseInt(comm.longitude),
      cultivation: parseInt(comm.cultivation),
      event: parseInt(comm.event),
      harvestDate: comm.harvestDate
    };
    return this.http.post(this.baseUrl + 'communication/', body, {headers: this.httpHeaders});
  };

  deleteCommunication(id) : Observable<any> {
    return this.http.delete(this.baseUrl + 'communication/' + id + '/', {headers: this.httpHeaders});
  };
}
