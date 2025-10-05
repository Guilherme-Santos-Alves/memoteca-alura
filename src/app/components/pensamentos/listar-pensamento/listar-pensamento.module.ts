import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPensamentoComponent } from './listar-pensamento.component';
import { ListarPensamentoRoutingModule } from './listar-pensamento-routing.module';
import { PensamentoModule } from '../pensamento/pensamento.module';



@NgModule({
  declarations: [
    ListarPensamentoComponent
  ],
  imports: [
    CommonModule,
    ListarPensamentoRoutingModule,
    PensamentoModule
  ],
  exports: [
    ListarPensamentoComponent
  ]
})
export class ListarPensamentoModule { }
