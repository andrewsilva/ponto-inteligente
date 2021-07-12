import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LancamentoComponent,
  ListagemComponent,
  FuncionarioComponent,
} from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LancamentoService, HttpUtilService } from '../shared';

@NgModule({
  declarations: [ListagemComponent, LancamentoComponent, FuncionarioComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, ReactiveFormsModule],
  providers: [HttpUtilService, LancamentoService]
})
export class FuncionarioModule {}
