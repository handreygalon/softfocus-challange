import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.css']
})
export class AddEditEventComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ev:any;
  id:number;
  name:string;

  ngOnInit(): void {
    this.id = this.ev.id;
    this.name = this.ev.name;
  }

  addEvent() {
    var item = {
      name: this.name
    };
    this.service.addEvent(item).subscribe(res => {
      alert("Evento adicionado com sucesso!");
    });
  }

  updateEvent() {
    var item = {
      id: this.id,
      name: this.name
    };
    this.service.updateEvent(item).subscribe(res => {
      alert("Evento atualizado com sucesso!");
    });
  }

}
