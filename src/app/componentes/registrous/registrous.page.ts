import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registrous',
  templateUrl: './registrous.page.html',
  styleUrls: ['./registrous.page.scss'],
})
export class RegistrousPage implements OnInit {

  
  email : string;
  password : string;  

  constructor(
    private authService : AuthService,
    public router : Router
  ) { }

  ngOnInit() {
  }

  registerEmail()
  {
    console.log("entre en el register")
    this.authService.registerEmail(this.email , this.password).then(res => {
      alert('Usuario registrado');
      this.router.navigate(['/login']);

    }).catch(err => alert(err))
  }

}
