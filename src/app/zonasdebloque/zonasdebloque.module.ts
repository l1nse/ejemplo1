import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonasdebloquePageRoutingModule } from './zonasdebloque-routing.module';

import { ZonasdebloquePage } from './zonasdebloque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonasdebloquePageRoutingModule
  ],
  declarations: [ZonasdebloquePage]
})
export class ZonasdebloquePageModule {}
