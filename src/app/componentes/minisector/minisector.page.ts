import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { BoulderService} from '../../servicios/boulder.service';

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

  constructor( private activated : ActivatedRoute,
               private boulderService : BoulderService ) {   }
  
  

  ngOnInit() {
    this.idminisector = this.activated.snapshot.paramMap.get('idminisector');
    this.idzona = this.activated.snapshot.paramMap.get('idzona');
    
    this.boulderService.getBoulderZone(this.idzona).subscribe((area) =>{      
      console.log(area);
      this.miniarea = area ;
      this.bloques = this.miniarea.boulderareas[this.idminisector].bloques
      console.log(this.bloques);
      
    })
  }

  verMiniArea(index)
  {
    console.log("zona");
    console.log(this.bloques[index]);
  }



}
