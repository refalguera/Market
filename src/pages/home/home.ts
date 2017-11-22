import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UserloginPage } from '../userlogin/userlogin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user:any;
pass:any;
  constructor(public navCtrl: NavController) {

  }

  letsGoCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  letsGoLogin(){
    this.navCtrl.push(UserloginPage);
    console.log(this.user);
    console.log(this.pass);
  }

}
