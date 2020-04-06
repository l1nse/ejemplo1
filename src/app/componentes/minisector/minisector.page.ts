import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BoulderService} from '../../servicios/boulder.service';
import { ModalController } from "@ionic/angular";
import { BloqueComponent} from '../bloque/bloque.component'
import { Router} from '@angular/router';

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
               private modal : ModalController,
               private router : Router ) {   }
  
  

  ngOnInit() {
    this.idminisector = this.activated.snapshot.paramMap.get('idminisector');
    console.log("id minisector : "+this.idminisector);

    this.idzona = this.activated.snapshot.paramMap.get('idzona');
    console.log("id zona> :  "+ this.idzona);

    this.nombre = this.activated.snapshot.paramMap.get('nombreminisector');
    console.log("nombre minisector : "+this.nombre);
    
    
    this.boulderService.getBoulderZone(this.idzona).subscribe((area) =>{      
      console.log(area);
      this.miniarea = area ;
      this.bloques = this.miniarea.boulderareas[this.idminisector].bloques
      console.log(this.bloques);

      console.log("miniarea : "+this.miniarea);
      //console.log(this.miniarea);
      
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

  volversectores()
  {
    console.log("volver al sector")
    this.router.navigate(['zonasdebloque' , this.idzona , ]);
  }



}
