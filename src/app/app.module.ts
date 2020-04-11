import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation} from '@ionic-native/geolocation/ngx'
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule  } from '@angular/fire/auth';

import { AngularFirestoreModule , FirestoreSettingsToken} from '@angular/fire/firestore';
import { ChatComponent} from '../app/componentes/chat/chat.component';
import { BoulderzoneComponent} from '../app/componentes/boulderzone/boulderzone.component';
import { BloqueComponent} from '../app/componentes/bloque/bloque.component';


import { FormsModule} from '@angular/forms';

import { GoogleMaps } from '@ionic-native/google-maps';



@NgModule({
  declarations: [AppComponent , ChatComponent , BoulderzoneComponent,BloqueComponent],
  entryComponents: [ChatComponent , BoulderzoneComponent,BloqueComponent],
  imports: [ FormsModule ,BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule,
    AngularFirestoreModule ],
   
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue : {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
