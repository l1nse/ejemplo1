import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

import {BoulderService} from '../../servicios/boulder.service';


@Component({
  selector: 'app-boulderzone',
  templateUrl: './boulderzone.component.html',
  styleUrls: ['./boulderzone.component.scss'],
})
export class BoulderzoneComponent implements OnInit {
  
  public nombre :string;
  public descripcion : string;

  public zone : any;
  public boulderzone : any;

  constructor( private navparams : NavParams,
               private modal : ModalController,
               private boulderService : BoulderService ) { }

  ngOnInit() {

    this.boulderService.getBoulderZone(this.zone.id).subscribe(boulderzone =>{
      this.boulderzone = boulderzone;
      console.log(this.boulderzone);
    })

    this.zone = this.navparams.get("zone");
    console.log(this.zone);
  }

  closeModal()
  {
    console.log("cerrando el modal zona de boulder");
    this.modal.dismiss()
  }

  abrirbloque( index : string)
  {
    console.log('abriendo un bloque : ' + index);
    this.modal.dismiss();
  }
  

}
