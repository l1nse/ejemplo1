import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  password : string;  

  constructor(private authService : AuthService, public router: Router ) { }

  ngOnInit() {
  }

  onSubmitLoginEmail()
  {
    console.log("entre a la funcion a traves del click")
    this.authService.loginEmail(this.email , this.password).then(res => {
      this.router.navigate(['/home']);

    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
    
  }
  
  redirectRegister()
  {
    this.router.navigate(['/registrous'])
  }

  registerEmail2()
  {
    console.log("entre en el register")
    this.authService.registerEmail(this.email , this.password).then(res => {
      alert('Usuario registrado');
      this.router.navigate(['/login']);

    }).catch(err => alert(err))
  }
  
}
