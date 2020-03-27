import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { ChatsService } from '../servicios/chats.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public authservice : AuthService,
              public chatservice : ChatsService) {}

  logout(){
    console.log("en el logout");
    this.authservice.logOut();
    alert("desconectado");
  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe( chats =>{
      chats.map( chat => {
        console.log(chat.payload.doc.data());
      })
    })

  }
}
