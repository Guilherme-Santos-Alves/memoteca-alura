import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPensamentoComponent } from './criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { CriarPensamentoRoutingModule } from './criar-pensamento-routing.module';



@NgModule({
  declarations: [
    CriarPensamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CriarPensamentoRoutingModule
  ],
  exports: [
    CriarPensamentoComponent
  ]
})
export class CriarPensamentoModule { }
