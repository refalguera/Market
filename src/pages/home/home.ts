import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UserloginPage } from '../userlogin/userlogin';
import { EmpresaPage } from '../empresa/empresa';
<<<<<<< HEAD
import { ParallaxDirective } from '../../directives/parallax/parallax';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
=======
import { Camera } from '@ionic-native/camera';
>>>>>>> 3a1fd2f69b83143eec131b0da2c3ef7e42ec439a

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
