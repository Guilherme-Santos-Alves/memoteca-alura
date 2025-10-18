import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    loadChildren: () => import('./components/pensamentos/listar-pensamento/listar-pensamento.module').then(m => m.ListarPensamentoModule)
  },
  {
    path: 'criarPensamento',
    loadChildren: () => import('./components/pensamentos/criar-pensamento/criar-pensamento.module').then(m => m.CriarPensamentoModule)
  }, 
  {
    path: 'pensamentos/excluirPensamento/:id', 
    loadChildren: () => import('./components/pensamentos/excluir-pensamento/excluir-pensamento.module').then(m => m.ExcluirPensamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
