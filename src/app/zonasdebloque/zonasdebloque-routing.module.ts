import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonasdebloquePage } from './zonasdebloque.page';

const routes: Routes = [
  {
    path: '',
    component: ZonasdebloquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonasdebloquePageRoutingModule {}
