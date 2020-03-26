import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) {  }

  loginEmail( email : string , password : string)
  {

    return new Promise( (resolve , rejected)  => {

      this.AFauth.auth.signInWithEmailAndPassword( email , password).then(user => {
        resolve(user)
      }).catch(err => rejected(err));

    } );    
  }

  registerEmail(email : string , password :string)
  {
    return new Promise((resolve , rejected) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email , password).then(res =>{
        resolve(res)
      }).catch(err => rejected(err));   
    } );   
  }
  


}
