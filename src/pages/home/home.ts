import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user:any;
  constructor(public navCtrl: NavController) {

  }

  letsGoCadastro(){
    console.log(this.user);
    this.navCtrl.push(CadastroPage);
  }

}
