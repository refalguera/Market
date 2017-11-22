import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContatoPage } from '../contato/contato';

/**
 * Generated class for the UserloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {

	SearchQuery: string = '';	// Variável para pesquisa
	items: string[];			// Variável para armazenar os resultados

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}



	// Inicialização dos itens

	// Busca
	getItems(ev: any){

		// Pega os itens inicializados.
		this.initializeItems();

		// Seta a pesquisa na variável
		let val = ev.target.value;

		/* Filtra de acordo com o que está no searchbar
		O processo funciona de forma automatica enquanto está sendo digitado.
		Selecionando aquilo que *CONTÉM* o que atualmente está no SearchBar	*/
		if (val && val.trim() != ''){
			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}

	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad UserloginPage');
  	}

  showAnother(){
    this.navCtrl.push(ContatoPage);
    console.log("ihu");
  }

	// Inicialização dos itens
	initializeItems() {
		//Adicionar aqui todos os itens de pesquisa. Lojas e Produtos
		this.items = [
			'batman',
			'superman',
			'betman',
			'soperman',
			'bitman',
			'siperman',
			'botman',
			'seperman',
			'butman',
			'saperman'
		];
	}

}
