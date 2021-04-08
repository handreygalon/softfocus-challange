import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getCommunicationList(): Observable<any> {
    return this.http.get(this.baseUrl + 'communication/', {headers: this.httpHeaders});
  }

  getAllCommunication(): Observable<any> {
    return this.http.get(this.baseUrl + 'communication/', {headers: this.httpHeaders});
  }

  addCommunication(value): Observable<any> {
    let body = {
      name: value.name,
      email: value.email,
      cpf: value.cpf,
      latitude: parseFloat(value.latitude),
      longitude: parseFloat(value.longitude),
      cultivation: parseInt(value.cultivation),
      event: parseInt(value.event),
      harvestDate: value.harvestDate
    };
    return this.http.post(this.baseUrl + 'communication/', body, {headers: this.httpHeaders});
  }

  updateCommunication(value): Observable<any> {
    let body = {
      name: value.name,
      email: value.email,
      cpf: value.cpf,
      latitude: value.latitude,
      longitude: value.longitude,
      cultivation: value.cultivation,
      event: value.event,
      harvestDate: value.harvestDate
    };
    return this.http.put(this.baseUrl + 'communication/' + value.id + '/', body, {headers: this.httpHeaders});
  }

  deleteCommunication(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'communication/' + id + '/', {headers: this.httpHeaders});
  }

  getAllCultivation(): Observable<any> {
    return this.http.get(this.baseUrl + 'cultivation/', {headers: this.httpHeaders});
  }

  getCultivationList(): Observable<any> {
    return this.http.get(this.baseUrl + 'cultivation/', {headers: this.httpHeaders});
  }

  addCultivation(value): Observable<any> {
    return this.http.post(this.baseUrl + 'cultivation/', value, {headers: this.httpHeaders});
  }

  updateCultivation(value): Observable<any> {
    let body = {
      name: value.name
    };
    return this.http.put(this.baseUrl + 'cultivation/' + value.id + '/', body, {headers: this.httpHeaders});
  }

  deleteCultivation(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'cultivation/' + id + '/', {headers: this.httpHeaders});
  }

  getAllEvent(): Observable<any> {
    return this.http.get(this.baseUrl + 'event/', {headers: this.httpHeaders});
  }

  getEventList(): Observable<any> {
    return this.http.get(this.baseUrl + 'event/', {headers: this.httpHeaders});
  }

  addEvent(value): Observable<any> {
    return this.http.post(this.baseUrl + 'event/', value, {headers: this.httpHeaders});
  }

  updateEvent(value): Observable<any> {
    let body = {
      name: value.name
    };
    return this.http.put(this.baseUrl + 'event/' + value.id + '/', body, {headers: this.httpHeaders});
  }

  deleteEvent(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'event/' + id + '/', {headers: this.httpHeaders});
  }
}
