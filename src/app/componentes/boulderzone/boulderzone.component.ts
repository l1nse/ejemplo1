import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

import {BoulderService} from '../../servicios/boulder.service';
import {Router} from'@angular/router';


@Component({
  selector: 'app-boulderzone',
  templateUrl: './boulderzone.component.html',
  styleUrls: ['./boulderzone.component.scss'],
})
export class BoulderzoneComponent implements OnInit {
  
  public nombre :string;
  public descripcion : string;
  public id_zona : string

  public zone : any;
  public boulderzone : any;
  public nombreminisector : string;

  constructor( private navparams : NavParams,
               private modal : ModalController,
               private boulderService : BoulderService ,
               private route : Router) { }

  ngOnInit() {

    this.boulderService.getBoulderZone(this.zone.id).subscribe(room =>{
      this.boulderzone = room;
      console.log(this.boulderzone);
      
    })

    this.zone = this.navparams.get("zone");
    console.log(this.zone);
    this.id_zona = this.zone.id;
  }

  closeModal()
  {
    console.log("cerrando el modal zona de boulder");
    this.modal.dismiss()
  }

  abrirbloque( index : string)
  {
    this.nombreminisector = this.zone.boulderareas[index].nombre;
    console.log("nombreminisecor");
    console.log(this.nombreminisector);
    console.log('abriendo un bloque : ' + index);
    this.route.navigate(['/minisector', index , this.id_zona , this.nombreminisector ]);
    this.modal.dismiss();
  }
  

}
