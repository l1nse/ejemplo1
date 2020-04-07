import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapazonaPage } from './mapazona.page';

const routes: Routes = [
  {
    path: '',
    component: MapazonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapazonaPageRoutingModule {}
