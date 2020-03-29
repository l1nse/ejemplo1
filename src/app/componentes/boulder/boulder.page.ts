import { Component, OnInit } from '@angular/core';

import { BoulderService } from "../../servicios/boulder.service";
import { ModalController } from "@ionic/angular";
import { BoulderzoneComponent} from '../boulderzone/boulderzone.component'

@Component({
  selector: 'app-boulder',
  templateUrl: './boulder.page.html',
  styleUrls: ['./boulder.page.scss'],
})
export class BoulderPage implements OnInit {

  public boulderZones : any = [];

  constructor( public boulderservice : BoulderService,
               public modal :  ModalController) { }

  ngOnInit() {
    this.boulderservice.getBoulderZones().subscribe( boulderzones =>{  
      this.boulderZones =  boulderzones;
    })

   
  }

  openZone( boulderZone){
      console.log("open zone ");
      this.modal.create({
        component : BoulderzoneComponent,
        componentProps : {
          zone : boulderZone
        }
      }).then((modal) => modal.present())  
  }

  


}
