import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-minisector',
  templateUrl: './minisector.page.html',
  styleUrls: ['./minisector.page.scss'],
})
export class MinisectorPage implements OnInit {

  argumentos = null;

  constructor( private activated : ActivatedRoute ) {   }
  
  

  ngOnInit() {
    this.argumentos = this.activated.snapshot.paramMap.get('id');
  }

}
