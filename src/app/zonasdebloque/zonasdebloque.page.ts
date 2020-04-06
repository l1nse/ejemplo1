import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import {BoulderService} from '../servicios/boulder.service';

@Component({
  selector: 'app-zonasdebloque',
  templateUrl: './zonasdebloque.page.html',
  styleUrls: ['./zonasdebloque.page.scss'],
})
export class ZonasdebloquePage implements OnInit {

  public idzonadebloque : string;
  public nombrezonadebloque : string;
  public zonadebloque : any;

  constructor( private activated : ActivatedRoute,
               private boulderService : BoulderService ,
               private router : Router) { }

  ngOnInit() {
    this.idzonadebloque = this.activated.snapshot.paramMap.get('idzonadebloque');
    //this.nombrezonadebloque = this.activated.snapshot.paramMap.get('nombrezonadebloque');
    //console.log('id zona de bloque : '+this.idzonadebloque);
    console.log('nombre : '+this.nombrezonadebloque);

    this.boulderService.getBoulderZone(this.idzonadebloque).subscribe(room =>{
      this.zonadebloque = room;
      this.nombrezonadebloque = this.zonadebloque.nombre;
      console.log(this.zonadebloque);    
    })
    
  }

  abrirminisector(idminisector)
  {
    console.log("id minisector : "+ idminisector);
    console.log("id zona de bloque : "+this.idzonadebloque);
    console.log("nombre minisector : "+this.zonadebloque.boulderareas[idminisector].nombre);
    this.router.navigate(['/minisector',idminisector , this.idzonadebloque ,this.zonadebloque.boulderareas[idminisector].nombre]);
    
  }

  volverZonasDeBoulder(){
    this.router.navigate(['/boulder']);
  }

  
  

}
