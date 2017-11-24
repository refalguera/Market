import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the EmpresaAtualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa-atualizar',
  templateUrl: 'empresa-atualizar.html',
})
export class EmpresaAtualizarPage {

  nome:any;
  cpf:any;
  end:any;
  tel:any;
  dono:any;
  user:any;
  pass:any;
  base64Image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public camera:Camera) {
  }

  accessGalleryAtt(){
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
    console.log('ionViewDidLoad EmpresaAtualizarPage');
  }

  goAtt(){


    if (this.nome == null && this.cpf==null && this.end==null && this.tel==null && this.user==null && this.pass==null && this.dono==null){
      this.doAlertEmp();
    }
    else {
      this.doOkayEmp();
    }

  }

  doAlertEmp() {
    let alert = this.alerCtrl.create({
      title: 'Cuidado',
      message: 'Todos os campos estão vazios! Nenhuma alteração realizada!',
      buttons: ['Ok']
    });
    alert.present()
  }

  doOkayEmp() {
    let alert = this.alerCtrl.create({
      title: 'Sucesso!',
      message: 'Campo(s) digitado(s) alterado(s) com sucesso!',
      buttons: ['Ok']
    });
    alert.present()
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.end);
    console.log(this.tel);
    console.log(this.dono);
    console.log(this.user);
    console.log(this.pass);
  }
}
