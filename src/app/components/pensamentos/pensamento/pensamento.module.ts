import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensamentoComponent } from './pensamento.component';
import { RouterModule } from '@angular/router';
import { ExcluirPensamentoModule } from '../excluir-pensamento/excluir-pensamento.module';



@NgModule({
  declarations: [
    PensamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExcluirPensamentoModule
  ],
  exports: [
    PensamentoComponent
  ]
})
export class PensamentoModule { }
