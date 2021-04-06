import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crop Loss Communications';

  selected_comm = {
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

  comms = []
  /*comms = [
    {
      name: "Handrey Emanuel",
      email: "handrey.eg@gmail.com",
      cpf: "05848678910",
      latitude: -25.8188475,
      longitude: -52.7438765,
      harvestDate: "2021-04-03",
      cultivation: 3,
      event: 2
    },
    {
      name: "Chuck Norris da Silva",
      email: "chucknorris@hotmail.com",
      cpf: "78294190004",
      latitude: -26.1942034,
      longitude: -52.6971228,
      harvestDate: "2021-04-04",
      cultivation: 4,
      event: 4
    }
  ];*/

  constructor(private api:ApiService, private router: Router) {
    this.getCropLossCommunications();
  }

  getCropLossCommunications = () => {
    this.api.getAllCropLossCommunications().subscribe(
      data => {
        //console.log(data);
        this.comms = data;
      },
      error => {
        console.log("Error", error.message);
      }
    );
  }

  commClicked = (cropLossCommunication) => {
    this.router.navigate(['communication-detail', cropLossCommunication.id])
  }
}
