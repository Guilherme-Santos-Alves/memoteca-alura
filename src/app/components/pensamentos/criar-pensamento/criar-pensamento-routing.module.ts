import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './criar-pensamento.component';

const routes: Routes = [
    {
        path: '',
        component: CriarPensamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriarPensamentoRoutingModule { }