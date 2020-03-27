import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service';
import { ChatsService } from '../servicios/chats.service';

interface chat {
  descripcion : string
  name : string
  id : string
  img : string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  public chatRooms : any = [];

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
        
        const data = chat.payload.doc.data() as chat;
        data.id = chat.payload.doc.id; 

        this.chatRooms.push(data); 

        console.log(data);
        //console.log(chat.payload.doc.data());
      })
    })

  }
}
