import { LancamentoService } from './../shared/services/lancamento.service';
import { HttpUtilService } from './../shared/services/http-util.service';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ListagemComponent,
  CadastroComponent,
  AtualizacaoComponent,
  AdminComponent,
} from './components';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [LancamentoService, HttpUtilService],
})
export class AdminModule {}
