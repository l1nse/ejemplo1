import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrousPageRoutingModule } from './registrous-routing.module';

import { RegistrousPage } from './registrous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrousPageRoutingModule
  ],
  declarations: [RegistrousPage]
})
export class RegistrousPageModule {}
