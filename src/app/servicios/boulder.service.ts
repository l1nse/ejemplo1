import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore' 
import {  map } from "rxjs/operators";

export interface boulder{
  descripcion : string
  id : string
  nombre : string
  img : string
  ubicacion : string 
}

@Injectable({
  providedIn: 'root'
})
export class BoulderService {

  constructor(private db : AngularFirestore) { }

  getBoulderZones(){
    //return this.db.collection('boulder').snapshotChanges();
    return this.db.collection('boulder').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as boulder;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
 }

 getBoulderZone(boulder_id : string){
  return this.db.collection('boulder').doc(boulder_id).valueChanges();
}






}


 