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
  id:number;
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

  commEventSelectedID:number;
  commEventSelectedName:string;
  commCultivationSelectedID:number;
  commCultivationSelectedName:string;

  ngOnInit(): void {
    this.loadCommunicationList();
    //console.log(this.comm);
  }

  loadCommunicationList() {
    this.loadCultivationList();
    this.loadEventList();
    this.id = this.comm.id;
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
      this.commCultivationSelectedID = this.comm.cultivation;

      for (var c of this.cultivationList) {
        let index = this.cultivationList.indexOf(c);
        if (c.id == this.commCultivationSelectedID) {
          this.commCultivationSelectedName = c.name;
          this.cultivationList.splice(index, 1);
        }
      }
    });
  }

  loadEventList() {
    this.service.getAllEvent().subscribe((data:any) => {
      this.eventList = data;
      this.commEventSelectedID = this.comm.event;

      for (var e of this.eventList) {
        let index = this.eventList.indexOf(e);
        if (e.id == this.commEventSelectedID) {
          this.commEventSelectedName = e.name;
          this.eventList.splice(index, 1);
        }
      }
    });
  }

  addCommunication() {
    for (var e of this.eventList) {
      if (e.name == this.event) {
        this.commEventSelectedID = e.id;
      }
    }

    for (var c of this.cultivationList) {
      if (c.name == this.cultivation) {
        this.commCultivationSelectedID = c.id;
      }
    }

    var item = {
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      harvestDate: this.harvestDate,
      latitude: this.latitude,
      longitude: this.longitude,
      cultivation: this.commCultivationSelectedID,
      event: this.commEventSelectedID
    };
    this.service.addCommunication(item).subscribe(res => {
      alert("Comunicação de perda criada com sucesso!");
    });
  }

  updateCommunication() {
    for (var e of this.eventList) {
      if (e.name == this.event) {
        this.commEventSelectedID = e.id;
      }
    }

    for (var c of this.cultivationList) {
      if (c.name == this.cultivation) {
        this.commCultivationSelectedID = c.id;
      }
    }

    var item = {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      harvestDate: this.harvestDate,
      latitude: this.latitude,
      longitude: this.longitude,
      cultivation: this.commCultivationSelectedID,
      event: this.commEventSelectedID
    };
    this.service.updateCommunication(item).subscribe(res => {
      alert("Comunicação de perda atualizada com sucesso!");
    });
  }

}
