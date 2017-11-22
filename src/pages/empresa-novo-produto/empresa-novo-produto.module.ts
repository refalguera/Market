import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaNovoProdutoPage } from './empresa-novo-produto';

@NgModule({
  declarations: [
    EmpresaNovoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaNovoProdutoPage),
  ],
})
export class EmpresaNovoProdutoPageModule {}
