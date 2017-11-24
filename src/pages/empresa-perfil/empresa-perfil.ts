import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { ParallaxDirective } from '../../directives/parallax/parallax';
import { EmpresaProdutosPage } from '../empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage } from '../empresa-novo-produto/empresa-novo-produto';
import { EmpresaAtualizarPage } from '../empresa-atualizar/empresa-atualizar';
import { HomePage } from '../home/home';

=======
import { Camera } from '@ionic-native/camera';
>>>>>>> 3a1fd2f69b83143eec131b0da2c3ef7e42ec439a

/**
 * Generated class for the EmpresaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-perfil',
  templateUrl: 'empresa-perfil.html',
})
export class EmpresaPerfilPage {

  telefoneemp:string ='14 99858-12232';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPerfilPage');
  }

  LetsGoProdutos(){
    this.navCtrl.push(EmpresaProdutosPage);
  }

  LetsGoNovoProduto(){
    this.navCtrl.push(EmpresaNovoProdutoPage);
  }

  LetsGoAtualizarEmp(){
    this.navCtrl.push(EmpresaAtualizarPage);
  }

  LetsGoLogin(){
    this.navCtrl.setRoot(HomePage);
  }

}
