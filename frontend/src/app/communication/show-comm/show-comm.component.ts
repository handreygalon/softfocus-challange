import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-comm',
  templateUrl: './show-comm.component.html',
  styleUrls: ['./show-comm.component.css']
})
export class ShowCommComponent implements OnInit {

  constructor(private service: SharedService) { }

  communicationList:any = [];

  ModalTitle:string;
  ActivateAddEditCommComp:boolean = false;
  comm:any;

  commCPFFilter:string = "";
  commListWithoutFilter:any = [];

  ngOnInit(): void {
    this.refreshCommList();
  }

  addClick() {
    this.comm = {
      id: 0,
      name: "",
      email: "",
      cpf: "",
      harvestDate: "",
      latitude: 0.0,
      longitude: 0.0,
      cultivation: "",
      event: ""
    }
    this.ModalTitle = "Nova comunicação de perda"
    this.ActivateAddEditCommComp = true;
  }

  editClick(item) {
    this.comm = item;
    this.ModalTitle = "Editar comunicação de perda";
    this.ActivateAddEditCommComp = true;
  }

  deleteClick(item) {
    if(confirm("Tem certeza que deseja excluir o item?")) {
      this.service.deleteCommunication(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshCommList();
      });
    };
  }

  closeClick() {
    this.ActivateAddEditCommComp = false;
    this.refreshCommList();
  }

  refreshCommList() {
    this.service.getCommunicationList().subscribe(data => {
      console.log(data);
      this.communicationList = data;
      this.commListWithoutFilter = data;
    });
  }

  FilterFn() {
    var commCPFFilter = this.commCPFFilter;

    this.communicationList = this.commListWithoutFilter.filter(function (e) {
      return e.cpf.toString().includes(commCPFFilter.toString());
    });
  }

}
