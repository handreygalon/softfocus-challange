import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

  constructor(private service: SharedService) { }

  eventList:any = [];

  ModalTitle:string;
  ActivateAddEditEventComp:boolean = false;
  ev:any;

  ngOnInit(): void {
    this.refreshEventList();
  }

  addClick() {
    this.ev = {
      id: 0,
      name: ""
    }
    this.ModalTitle = "Novo Evento"
    this.ActivateAddEditEventComp = true;
  }

  editClick(item) {
    this.ev = item;
    this.ModalTitle = "Editar Evento";
    this.ActivateAddEditEventComp = true;
  }

  deleteClick(item) {
    if(confirm("Tem certeza que deseja excluir o item?")) {
      this.service.deleteEvent(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshEventList();
      });
    };
  }

  closeClick() {
    this.ActivateAddEditEventComp = false;
    this.refreshEventList();
  }

  refreshEventList() {
    this.service.getEventList().subscribe(data => {
      console.log(data);
      this.eventList = data;
    });
  }

}
