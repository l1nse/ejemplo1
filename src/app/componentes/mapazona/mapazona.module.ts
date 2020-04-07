import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapazonaPageRoutingModule } from './mapazona-routing.module';

import { MapazonaPage } from './mapazona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapazonaPageRoutingModule
  ],
  declarations: [MapazonaPage]
})
export class MapazonaPageModule {}
