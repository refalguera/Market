import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { EmpresaPage } from '../empresa/empresa';

/**
 * Generated class for the EmpresaNovoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-novo-produto',
  templateUrl: 'empresa-novo-produto.html',
})
export class EmpresaNovoProdutoPage {

  tpy:any;
  nome:any;
  valor:any;
  texto:any;
  base64Image:any;

  constructor(public navCtrl: NavController,public camera:Camera) {}


    accessGallery(){
      this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,'+imageData;
      }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaNovoProdutoPage');
  }

  goToPerfil() {
      console.log(this.tpy);
      console.log(this.nome);
      console.log(this.valor);
      console.log(this.texto);
      console.log(this.base64Image);
      this.navCtrl.setRoot(EmpresaPage);



  }

}
