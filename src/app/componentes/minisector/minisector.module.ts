import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinisectorPageRoutingModule } from './minisector-routing.module';

import { MinisectorPage } from './minisector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinisectorPageRoutingModule
  ],
  declarations: [MinisectorPage]
})
export class MinisectorPageModule {}
