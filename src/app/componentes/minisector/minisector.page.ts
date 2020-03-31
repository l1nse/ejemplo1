import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BoulderService} from '../../servicios/boulder.service';
import { ModalController } from "@ionic/angular";
import { BloqueComponent} from '../bloque/bloque.component'

@Component({
  selector: 'app-minisector',
  templateUrl: './minisector.page.html',
  styleUrls: ['./minisector.page.scss'],
})
export class MinisectorPage implements OnInit {

  public idminisector : string;
  public idzona : string;
  public bloques :any ;  
  public miniarea : any;
  public nombre : string;

  constructor( private activated : ActivatedRoute,
               private boulderService : BoulderService,
               private modal : ModalController ) {   }
  
  

  ngOnInit() {
    this.idminisector = this.activated.snapshot.paramMap.get('idminisector');
    this.idzona = this.activated.snapshot.paramMap.get('idzona');
    this.nombre = this.activated.snapshot.paramMap.get('nombreminisector');
    console.log("nombre");
    console.log(this . nombre);
    
    this.boulderService.getBoulderZone(this.idzona).subscribe((area) =>{      
      console.log(area);
      this.miniarea = area ;
      this.bloques = this.miniarea.boulderareas[this.idminisector].bloques
      console.log(this.bloques);

      console.log("miniarea");
      console.log(this.miniarea);
      
    })
  }

  verMiniArea(index)
  {
    console.log("zona");
    console.log(this.bloques[index]);
  }

  openBloque( index){
    this.modal.create({
      component : BloqueComponent,
      componentProps : {
        bloque : this.bloques[index]
      }
    }).then((modal) => modal.present())
  }



}
