import { Component, OnInit } from '@angular/core';
import { BoulderService } from "../../servicios/boulder.service";

@Component({
  selector: 'app-boulder',
  templateUrl: './boulder.page.html',
  styleUrls: ['./boulder.page.scss'],
})
export class BoulderPage implements OnInit {

  public boulderZones : any = [];

  constructor( public boulderservice : BoulderService ) { }

  ngOnInit() {
    this.boulderservice.getBoulderZones().subscribe( boulderzones =>{  
      this.boulderZones =  boulderzones;
    })
  }

}
