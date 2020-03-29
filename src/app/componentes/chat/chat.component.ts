import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

import { message } from '../../models/message';
import { ChatsService} from '../../servicios/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat : any;
  //public mensajes = [];
  //public message : message ;
  public msg : string;
  public room : any;


  constructor(private navparams : NavParams,
              private modal : ModalController,
              private chatService : ChatsService ) { }

  ngOnInit() {
    this.chatService.getChatRoom(this.chat.id).subscribe(room =>{
      console.log(room);
      this.room = room;
    })

    this.chat = this.navparams.get("chat");
  }

  
  closeModal()
  {
    console.log("cerrando el modal chat");
    this.modal.dismiss()
  }

  sendMensage(){

    const mensaje : message = {
      content : this.msg,
      type : "text",
      date : new Date()
    }

    //this.mensajes.push(this.message);
    this.chatService.sendMsgToFirebase( mensaje , this.chat.id);
    this.msg = "";
  }

}
