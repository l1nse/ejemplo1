import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-boulderzone',
  templateUrl: './boulderzone.component.html',
  styleUrls: ['./boulderzone.component.scss'],
})
export class BoulderzoneComponent implements OnInit {
  
  public nombre :string;
  public descripcion : string;

  constructor( private navparams : NavParams,
               private modal : ModalController ) { }

  ngOnInit() {
    this.nombre = this.navparams.get("nombre");
    this.descripcion = this.navparams.get("descripcion")
  }

  closeModal()
  {
    console.log("cerrando el modal zona de boulder");
    this.modal.dismiss()
  }

}
