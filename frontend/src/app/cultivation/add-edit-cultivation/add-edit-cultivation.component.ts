import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cultivation',
  templateUrl: './add-edit-cultivation.component.html',
  styleUrls: ['./add-edit-cultivation.component.css']
})
export class AddEditCultivationComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cultiv:any;
  //@Input() cultiv: {id: 0, name: ''}
  id:number;
  name:string;

  ngOnInit(): void {
    this.name = this.cultiv.name;
  }

  addCultivation() {
    var item = {
      name: this.name
    };
    this.service.addCultivation(item).subscribe();
  }

  updateCultivation() {
    var item = {
      id: this.id,
      name: this.name
    };
    this.service.updateCultivation(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
