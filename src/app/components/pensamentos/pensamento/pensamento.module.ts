import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensamentoComponent } from './pensamento.component';



@NgModule({
  declarations: [
    PensamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PensamentoComponent
  ]
})
export class PensamentoModule { }
