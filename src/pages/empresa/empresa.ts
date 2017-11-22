import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaProdutosPage } from '../empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage } from '../empresa-novo-produto/empresa-novo-produto';
import { EmpresaPerfilPage } from '../empresa-perfil/empresa-perfil';
import { EmpresaAtualizarPage } from '../empresa-atualizar/empresa-atualizar';


/**
 * Generated class for the EmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
  }

  LetsGoProdutos(){
    this.navCtrl.push(EmpresaProdutosPage);
  }

  LetsGoNovoProduto(){
    this.navCtrl.push(EmpresaNovoProdutoPage);
  }

  LetsGoPerfilEmp(){
    this.navCtrl.push(EmpresaPerfilPage);
  }

  LetsGoAtualizarEmp(){
    this.navCtrl.push(EmpresaAtualizarPage);
  }

}
