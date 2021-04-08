import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cultivation',
  templateUrl: './show-cultivation.component.html',
  styleUrls: ['./show-cultivation.component.css']
})
export class ShowCultivationComponent implements OnInit {

  constructor(private service: SharedService) { }

  cultivationList:any = [];

  ModalTitle:string;
  ActivateAddEditCultivationComp:boolean = false;
  cultiv:any;

  ngOnInit(): void {
    this.refreshCultivationList();
  }

  addClick() {
    this.cultiv = {
      id: 0,
      name: ""
    }
    this.ModalTitle = "Novo cultivo"
    this.ActivateAddEditCultivationComp = true;
  }

  editClick(item) {
    this.cultiv = item;
    this.ModalTitle = "Editar cultivo";
    this.ActivateAddEditCultivationComp = true;
  }

  deleteClick(item) {
    console.log(item);
    if(confirm("Tem certeza que deseja excluir o item?")) {
      this.service.deleteCultivation(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshCultivationList();
      });
    };
  }

  closeClick() {
    this.ActivateAddEditCultivationComp = false;
    this.refreshCultivationList();
  }

  refreshCultivationList() {
    this.service.getCultivationList().subscribe(data => {
      console.log(data);
      this.cultivationList = data;
    });
  }

}
