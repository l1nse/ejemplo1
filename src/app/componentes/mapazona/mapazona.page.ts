import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-mapazona',
  templateUrl: './mapazona.page.html',
  styleUrls: ['./mapazona.page.scss'],
})
export class MapazonaPage implements OnInit {

  public idzonadebloque : string;
  public nombrezonadebloque : string;

  constructor( private activated : ActivatedRoute,
               private router : Router) { }

  ngOnInit() {
    this.idzonadebloque = this.activated.snapshot.paramMap.get('idzonadebloque');
    this.nombrezonadebloque = this.activated.snapshot.paramMap.get('nombrezonadebloque');
    console.log(this.nombrezonadebloque);
  }

  volverzonadebloque()
  {
   console.log("volviendo al sector de bloque sellecionado previamente");
   this.router.navigate(['/zonasdebloque', this.idzonadebloque, this.nombrezonadebloque])
  }

}
