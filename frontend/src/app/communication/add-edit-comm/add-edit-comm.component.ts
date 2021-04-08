import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-comm',
  templateUrl: './add-edit-comm.component.html',
  styleUrls: ['./add-edit-comm.component.css']
})
export class AddEditCommComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() comm:any;
  name:string;
  email:string;
  cpf:string;
  harvestDate:string;
  latitude:number;
  longitude:number;
  cultivation:string;
  event:string;

  cultivationList:any = [];
  eventList:any = [];

  ngOnInit(): void {
    this.loadCommunicationList();
  }

  loadCommunicationList() {
    this.loadCultivationList();
    this.loadEventList();
    this.name = this.comm.name;
    this.email = this.comm.email;
    this.cpf = this.comm.cpf;
    this.harvestDate = this.comm.harvestDate;
    this.latitude = this.comm.latitude;
    this.longitude = this.comm.longitude;
  }

  loadCultivationList() {
    this.service.getAllCultivation().subscribe((data:any) => {
      this.cultivationList = data;
    });
  }

  loadEventList() {
    this.service.getAllEvent().subscribe((data:any) => {
      this.eventList = data;
    });
  }

  addCommunication() {
    var item = {
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      harvestDate: this.harvestDate,
      latitude: this.latitude,
      longitude: this.longitude,
      cultivation: this.cultivation,
      event: this.event
    };
    this.service.addCommunication(item).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCommunication() {
    var item = {
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      harvestDate: this.harvestDate,
      latitude: this.latitude,
      longitude: this.longitude,
      cultivation: this.cultivation,
      event: this.event
    };
    this.service.updateCommunication(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
