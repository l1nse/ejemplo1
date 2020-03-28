import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public name : string ;
  public descripcion : string;

  public mensajes = [
     'hola soy un mensaje',
     '2do mensaje',
     '3er mensaje'
  ];
  public msg :string;


  constructor(private navparams : NavParams,
              private modal : ModalController ) { }

  ngOnInit() {
    this.name = this.navparams.get("name");
    this.descripcion = this.navparams.get("descripcion")
  }

  
  closeModal()
  {
    console.log("cerrando el modal chat");
    this.modal.dismiss()
  }

  sendMensage(){
    this.mensajes.push(this.msg);
    this.msg = "";
  }

}
