import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), 
    canActivate : [AuthGuard] },

  {path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule),
    canActivate : [NologinGuard]},

  {path: 'boulder',
    loadChildren: () => import('./componentes/boulder/boulder.module').then( m => m.BoulderPageModule),
    canActivate : [AuthGuard] },

  {path: 'registrous',
    loadChildren: () => import('./componentes/registrous/registrous.module').then( m => m.RegistrousPageModule),
    canActivate : [NologinGuard] },
 
  {
    path: 'minisector/:id',
    loadChildren: () => import('./componentes/minisector/minisector.module').then( m => m.MinisectorPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
