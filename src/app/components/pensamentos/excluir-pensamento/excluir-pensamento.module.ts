import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcluirPensamentoComponent } from './excluir-pensamento.component';
import { ExcluirPensamentoRoutingModule } from './excluir-pensamento-routing.module';



@NgModule({
  declarations: [
    ExcluirPensamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExcluirPensamentoComponent,
    ExcluirPensamentoRoutingModule
  ]
})
export class ExcluirPensamentoModule { }
