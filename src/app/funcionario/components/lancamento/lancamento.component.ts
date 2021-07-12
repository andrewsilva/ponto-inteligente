import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {
  Tipo,
  Lancamento,
  LancamentoService,
  HttpUtilService,
} from '../../../shared';

import * as moment from 'moment';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css'],
})
export class LancamentoComponent implements OnInit {
  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: any;
  ultimoTipoLancado: string;
  msg: string;

  constructor(
    private router: Router,
    private httpUtil: HttpUtilService,
    private lancamentoService: LancamentoService
  ) {}

  ngOnInit(): void {
    this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
    this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
    this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();
  }

  obterGeoLocation(): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          (this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`)
      );
    }
    return '';
  }

  iniciarTrabalho() {
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho() {
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco() {
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  obterUltimoLancamento() {
    this.lancamentoService.buscarUltimoTipoLancado()
    .subscribe(
      data => {
        this.ultimoTipoLancado = data.data ? data.data.tipo: '';
      },
      err =>{
        this.msg = "Erro obtendo ultimo lancamento";
      }
    );
  }

  cadastrar(tipo: Tipo) {
    const lancamento: Lancamento = new Lancamento(
      this.dataAtualEn,
      tipo,
      this.geoLocation,
      this.httpUtil.obterIdUsuario()
    );

    this.lancamentoService.cadastrar(lancamento)
    .subscribe(
      data =>{
        this.msg = "Lançamento realizado com sucesso!";
        this.router.navigate(['/funcionario/listagem']);
      },
      err =>{
        this.msg = "Tente novamente em instantes"
        if(err.status == 400){
          this.msg = err.error.errors.join(' ');
        }
      }
    )
  }

  obterUrlMapa(): string {
    return 'http://www.google.com/maps/search/?api=1&query=' + this.geoLocation;
  }

  exibirInicioTrabalho(): boolean {
    return (
      this.ultimoTipoLancado == '' ||
      this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO
    );
  }

  exibirTerminoTrabalho(): boolean {
    return (
      this.ultimoTipoLancado == Tipo.INICIO_TRABALHO ||
      this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO
    );
  }

  exibirInicioAlmoco(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean {
    return this.ultimoTipoLancado == Tipo.INICIO_ALMOCO;
  }
}
