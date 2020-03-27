import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public name : string ;
  public descripcion : string;

  constructor(private router : Router,
              private navparams : NavParams,
              private modal : ModalController ) { }

  ngOnInit() {
    this.name = this.navparams.get("name");
    this.descripcion = this.navparams.get("descripcion")
  }

  atras()
  {
    console.log("atras")
    this.router.navigate(['/home'])
  }

  closeModal()
  {
    console.log("cerrando el modal chat");
    this.modal.dismiss()
  }

}
