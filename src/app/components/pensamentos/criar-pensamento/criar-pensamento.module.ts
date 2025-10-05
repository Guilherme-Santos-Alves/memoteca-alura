import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPensamentoComponent } from './criar-pensamento.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CriarPensamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CriarPensamentoComponent
  ]
})
export class CriarPensamentoModule { }
