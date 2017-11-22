import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

    nome:any;
    cpf:any;
    end:any;
    tel:any;
    dono:any;
    user:any;
    pass:any;
    tipocadastro:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  showData() {
    console.log(this.tipocadastro);
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.end);
    console.log(this.tel);
    console.log(this.dono);
    console.log(this.user);
    console.log(this.pass);
  }

}
