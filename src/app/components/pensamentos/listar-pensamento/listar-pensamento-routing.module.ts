import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentoComponent } from './listar-pensamento.component';

const routes: Routes = [
    {
        path: '',
        component: ListarPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarPensamentoRoutingModule { }