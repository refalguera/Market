import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserloginPage } from './userlogin';
import { ContatoPage } from '../contato/contato';
import { PedidosPage } from '../pedidos/pedidos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { PerfilPage } from '../perfil/perfil';


@NgModule({
  declarations: [
    UserloginPage,
  ],
  imports: [
    IonicPageModule.forChild(UserloginPage),
  ],
})
export class UserloginPageModule {}
