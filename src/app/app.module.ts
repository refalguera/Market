import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { ContatoPage } from '../pages/contato/contato';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PerfilPage } from '../pages/perfil/perfil';
import { EmpresaPage } from '../pages/empresa/empresa';
import { EmpresaProdutosPage } from '../pages/empresa-produtos/empresa-produtos';
import { EmpresaNovoProdutoPage } from '../pages/empresa-novo-produto/empresa-novo-produto';
import { EmpresaPerfilPage } from '../pages/empresa-perfil/empresa-perfil';
import { EmpresaAtualizarPage } from '../pages/empresa-atualizar/empresa-atualizar';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    UserloginPage,
    ContatoPage,
    PedidosPage,
    CarrinhoPage,
    PerfilPage,
    EmpresaPage,
    EmpresaProdutosPage,
    EmpresaNovoProdutoPage,
    EmpresaPerfilPage,
    EmpresaAtualizarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    UserloginPage,
    ContatoPage,
    PedidosPage,
    CarrinhoPage,
    PerfilPage,
    EmpresaPage,
    EmpresaProdutosPage,
    EmpresaNovoProdutoPage,
    EmpresaPerfilPage,
    EmpresaAtualizarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
