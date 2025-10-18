import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPensamentoComponent } from './editar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { EditarPensamentoRoutingModule } from './editar-pensamento-routing.module';



@NgModule({
  declarations: [
    EditarPensamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditarPensamentoRoutingModule
  ], 
  exports: [
    EditarPensamentoComponent
  ]
})
export class EditarPensamentoModule { }
