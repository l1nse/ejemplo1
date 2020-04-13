import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Geolocation} from '@ionic-native/geolocation/ngx';

import { BoulderService } from '../../servicios/boulder.service';

declare var google : any;

@Component({
  selector: 'app-mapazona',
  templateUrl: './mapazona.page.html',
  styleUrls: ['./mapazona.page.scss'],
})
export class MapazonaPage implements OnInit {

  public  map : any;
  public infowindow : any;
  public contentString : any;
  public marker : any;

  public idzonadebloque : string;
  public nombrezonadebloque : string;
  public miubicacion : any ;
  //public map : GoogleMap;

  public zonaBoulder : any;

  constructor( private activated : ActivatedRoute,
               private router : Router,
               private boulderservice : BoulderService,
               private geo : Geolocation) { }

  ngOnInit() {
    this.idzonadebloque = this.activated.snapshot.paramMap.get('idzonadebloque');
    this.nombrezonadebloque = this.activated.snapshot.paramMap.get('nombrezonadebloque');
    console.log(this.nombrezonadebloque);

    console.log(this.idzonadebloque);

    this.loadmap();
    
    //extraer los datos de la zona seleccionada
    this.boulderservice.getBoulderZone(this.idzonadebloque).subscribe(zona =>{
      this.zonaBoulder = zona;
       var contador = 0 ;
       
      //recorrer las areas por zona
      for (let areabloque of this.zonaBoulder.boulderareas) {
          console.log(areabloque);
          //recorre los bloques por area
          for(let bloque of areabloque.bloques){

            //agrega un marcador por bloque  segun latitud y longitud de cada bloque 
            console.log("Posicion lat : "+ bloque.latitud +" Posicion long : "+ bloque.longitud +" Nombre : "+bloque.nombre );  
            this.agregarMarcador(bloque , bloque.nombre , bloque.latitud , bloque.longitud);            
            
          }    
          contador = contador +1;
          
      }

    });

    
    
  }

  loadmap()
  { 
    console.log("loadmap");

    //inicia el mapa 
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.438275 , lng: -70.830780},
      zoom: 15
    });
    
  }

  agregarMarcador(bloque , nombremarcador , latitud , longitud)
  {
    //crea un marcador 
    var nombremarcador = new google.maps.Marker({
      position: {
        lat: latitud , lng: longitud
      },
      title : bloque.nombre,
      map : this.map 
    }) 

     //agrega la funcion click al marcador
     nombremarcador.addListener('click', function() {
      console.log("click en el marcador");

      //crea el info window
      let infowindow = new google.maps.InfoWindow({
        content: 
          //lo que se muestra dentro del info window
          "<a href='boulder'>"+bloque.nombre+"</a>"
              });
              
      //abre el info widndow
      infowindow.open(this.map,nombremarcador);
    });
  }

  
  volverzonadebloque()
  {
   console.log("volviendo al sector de bloque sellecionado previamente");
   this.router.navigate(['/zonasdebloque', this.idzonadebloque, this.nombrezonadebloque])
   
  }


  /*
  addMarker()
  {
    //Se crea el primer marcador
    var marker = new google.maps.Marker({
      position: {
        lat: -33.438275 , lng: -70.830780
      },      
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 7, //tamaño
        //strokeColor: '#f00', //color del borde
        strokeWeight: 1, //grosor del borde
        fillColor: '#00f', //color de relleno
        fillOpacity:1// opacidad del relleno
      },
      map : this.map ,
      title : "Entrada",
    });

    //Se añade el evento click al marcador
    marker.addListener('click', function() {
      console.log("click en el marcador");
      //console.log("marcador : " + marker);
      //this.map.setZoom(8);
      //this.map.setCenter(this.marker.getPosition());

      //se crea el info window pasandole el string declarado mas arriva
      let infowindow = new google.maps.InfoWindow({
        /* ejemplo de content 
        content: '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>'
      });
      //se abre el info window.
      infowindow.open(this.map , marker);
      
    });

    

    

    /*
    var markerBloque1 = new google.maps.Marker({
      position: {
        lat: -33.434136 , lng: -70.835312
      },
      title : "Gran placa",
      map : this.map 
    }) 

    markerBloque1.addListener('click', function() {
      console.log("click en el marcador");

      let infowindow = new google.maps.InfoWindow({
        content: "Gran placa"
      });
      //se abre el info window.
      infowindow.open(this.map,markerBloque1);
      
     });
     
  }
 */


  
}
