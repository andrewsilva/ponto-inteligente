import { AtualizacaoComponent, CadastroComponent, ListagemComponent } from './components';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin.component';
import { Routes, RouterModule } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: ListagemComponent,
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
      },
      {
        path: 'atualizacao/:lancamentoId',
        component: AtualizacaoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
