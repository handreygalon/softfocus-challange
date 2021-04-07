import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-communication-detail',
  templateUrl: './communication-detail.component.html',
  styleUrls: ['./communication-detail.component.css']
})
export class CommunicationDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private appComponent: AppComponent) { }

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
  };
  selected_id;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadCropLossCommunication(id);
    });
  }

  loadCropLossCommunication(id) {
    this.api.getCropLossCommunications(id).subscribe(
      data => {
        //console.log(data);
        this.selected_comm = data;
      },
      error => {
        console.log("Error", error.message);
      }
    );
  }

  updateCropLossCommunication() {
    this.api.updateCropLossCommunications(this.selected_comm).subscribe(
      data => {
        this.selected_comm = data;
      },
      error => {
        console.log("Error", error.message);
      }
    );
  }

  deleteCropLossCommunication() {
    this.api.deleteCommunication(this.selected_id).subscribe(
      data => {
        let index;

        this.appComponent.comms.forEach((e, i) => {
          if (e.id == this.selected_id) {
            index = i;
          }
        });

        this.appComponent.comms.splice(index, 1);
      },
      error => {
        console.log("Error", error.message);
      }
    );
  }

  /*newCropLossCommunication() {
    this.router.navigate(['new-communication'])
  }*/
}
