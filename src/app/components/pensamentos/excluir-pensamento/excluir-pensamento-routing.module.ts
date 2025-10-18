import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamentoComponent } from './excluir-pensamento.component';

const routes: Routes = [
    {
        path: '',
        component: ExcluirPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcluirPensamentoRoutingModule { }