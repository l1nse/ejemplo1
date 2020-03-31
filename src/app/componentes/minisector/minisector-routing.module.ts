import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinisectorPage } from './minisector.page';

const routes: Routes = [
  {
    path: '',
    component: MinisectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinisectorPageRoutingModule {}
