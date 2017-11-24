import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  base64Image:any;
  nome:any;
  cpf:any;
  end:any;
  tel:any;
  dono:any;
  user:any;
  pass:any;
  tipocadastro:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public camera:Camera) {

	}
 
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
    	console.log('ionViewDidLoad PerfilPage');
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

    /*FUNÇÃO PARA ALTERAR CADASTRO*/
  }

}
