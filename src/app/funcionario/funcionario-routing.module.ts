import {
  ListagemComponent,
  LancamentoComponent,
  FuncionarioComponent,
} from './components';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const FuncionarioRoutes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    children: [
      {
        path: '',
        component: LancamentoComponent,
      },
      {
        path: 'listagem',
        component: ListagemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(FuncionarioRoutes)],
  exports: [RouterModule],
})
export class FuncionarioRoutingModule {}
