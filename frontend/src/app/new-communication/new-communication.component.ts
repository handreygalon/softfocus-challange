import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-communication',
  templateUrl: './new-communication.component.html',
  styleUrls: ['./new-communication.component.css']
})
export class NewCommunicationComponent implements OnInit {
  comm = {
    id: 0,
    name: "",
    email: "",
    cpf: "",
    latitude: 0,
    longitude: 0,
    harvestDate: "",
    cultivation: 0,
    event: 0
  }

  constructor(
    private api: ApiService,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  save() {
    this.api.saveNewCropLossCommunication(this.comm).subscribe(
      data => {
        this.appComponent.comms.push(data);
      },
      error => {
        console.log("Error", error.message);
      }
    );
  }

}
