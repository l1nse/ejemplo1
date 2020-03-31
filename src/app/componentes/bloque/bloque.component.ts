import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.scss'],
})
export class BloqueComponent implements OnInit {

  public bloque : any;

  constructor( private navparams : NavParams,
               private modal : ModalController) { }

  ngOnInit() {
    this.bloque = this.navparams.get("bloque");

    console.log("bloque")
    console.log(this.bloque)
  }

  closeModal()
  {
    console.log("cerrando el modal bloque");
    this.modal.dismiss()
  }

}
