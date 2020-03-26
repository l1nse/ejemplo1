import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrousPage } from './registrous.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrousPageRoutingModule {}
