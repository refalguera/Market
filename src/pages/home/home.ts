import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UserloginPage } from '../userlogin/userlogin';
import { EmpresaPage } from '../empresa/empresa';
import { ParallaxDirective } from '../../directives/parallax/parallax';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user:any;
pass:any;
tpyHomeLogin:any;


  constructor(public navCtrl: NavController) {

  }

  letsGoCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  letsGoLogin(){
    if (this.tpyHomeLogin=="cliente"){
      this.navCtrl.setRoot(UserloginPage);
      console.log(this.tpyHomeLogin);
      console.log(this.user);
      console.log(this.pass);
    }
    if (this.tpyHomeLogin=="empresa") {
      this.navCtrl.setRoot(EmpresaPerfilPage);
    console.log(this.tpyHomeLogin);
    console.log(this.user);
    console.log(this.pass);
  }
  }

}
