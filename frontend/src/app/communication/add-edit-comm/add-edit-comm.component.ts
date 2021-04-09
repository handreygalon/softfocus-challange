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

    if (this.isValidCPF(this.cpf) && this.validateEmail(this.email)) {
      this.service.addCommunication(item).subscribe(
        res => {
          alert("Comunicação de perda criada com sucesso!");
        },
        error => {
          alert("Já existe um registro para esta data em uma área próxima com outro evento cadastrado!");
        }
      );
    }
    else {
      alert("CPF ou email inválidos!");
    }
  }

  updateCommunication() {
    /*for (var e of this.eventList) {
      if (e.name == this.event) {
        this.commEventSelectedID = e.id;
      }
    }

    for (var c of this.cultivationList) {
      if (c.name == this.cultivation) {
        this.commCultivationSelectedID = c.id;
      }
    }*/

    var item = {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      harvestDate: this.harvestDate,
      latitude: this.latitude,
      longitude: this.longitude,
      cultivation: this.comm.cultivation.id,
      event: this.comm.event.id
      //cultivation: this.commCultivationSelectedID,
      //event: this.commEventSelectedID
    };

    if (this.isValidCPF(this.cpf) && this.validateEmail(this.email)) {
      this.service.updateCommunication(item).subscribe(
        res => {
          alert("Comunicação de perda atualizada com sucesso!");
        }
      );
    }
    else {
      alert("CPF ou email inválidos!");
    }
  }

  validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
  }
}
