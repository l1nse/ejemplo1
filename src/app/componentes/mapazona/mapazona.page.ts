import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Geolocation} from '@ionic-native/geolocation/ngx';

declare var google : any;

@Component({
  selector: 'app-mapazona',
  templateUrl: './mapazona.page.html',
  styleUrls: ['./mapazona.page.scss'],
})
export class MapazonaPage implements OnInit {

  public  map : any;

  public idzonadebloque : string;
  public nombrezonadebloque : string;
  public miubicacion : any ;
  //public map : GoogleMap;

  constructor( private activated : ActivatedRoute,
               private router : Router,
               private geo : Geolocation) { }

  ngOnInit() {
    this.idzonadebloque = this.activated.snapshot.paramMap.get('idzonadebloque');
    this.nombrezonadebloque = this.activated.snapshot.paramMap.get('nombrezonadebloque');
    console.log(this.nombrezonadebloque);
  }

  ionViewDidEnter(){
   this.loadmap();

  }

  loadmap()
  {
    console.log("loadmap");
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.438275 , lng: -70.830780},
      zoom: 15,
    })

    var markerEntrada = new google.maps.Marker({
      position: {
        lat: -33.438275 , lng: -70.830780
      },
      title : "Entrada",
      map : this.map 
    })

    var markerBloque1 = new google.maps.Marker({
      position: {
        lat: -33.434136 , lng: -70.835312
      },
      title : "Gran placa",
      map : this.map 
    })
  }
    
  

  volverzonadebloque()
  {
   console.log("volviendo al sector de bloque sellecionado previamente");
   this.router.navigate(['/zonasdebloque', this.idzonadebloque, this.nombrezonadebloque])
   
  }

    

}
