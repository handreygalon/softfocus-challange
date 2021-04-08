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
  name:string;

  ngOnInit(): void {
    this.name = this.ev.name;
  }

  addEvent() {
    var item = {
      name: this.name
    };
    this.service.addEvent(item).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEvent() {
    var item = {
      name: this.name
    };
    this.service.updateEvent(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
