import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CadastroPj } from '../../models';

import { CadastroPjService } from './../../services';
import { CpfValidator, CnpjValidator } from '../../../../shared/validators';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css'],
})
export class CadastrarPjComponent implements OnInit {
  form: FormGroup;

  show = false;
  msg = '';
  msgErr = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cadastroPjService: CadastroPjService
  ) {}

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, CnpjValidator]],
    });
  }

  cadastrarPj() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPj: CadastroPj = this.form.value;
    this.cadastroPjService.cadastrar(cadastroPj).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.msg = 'Realize o login para acessar o sistema.';
        this.show = true;
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.msg = 'Tente novamente em instantes.';
        if (err.status == 400) {
          this.msgErr = err.error.errors.join(' ');
        }
        this.msg = this.msgErr;
      }
    );
    return false;
  }
}
