import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth} from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private AFauth : AngularFireAuth,
    private router : Router
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.AFauth.authState.pipe(map( auth => {
        if(isNullOrUndefined(auth)){
          //console.log(auth);
          
          this.router.navigate(['/login'])
          return false;
        }else
        {
          //console.log(auth);
          return true;
        }
        
      } ))
    
  }
  
}
