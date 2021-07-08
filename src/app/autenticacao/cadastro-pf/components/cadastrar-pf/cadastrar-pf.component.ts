import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CnpjValidator, CpfValidator } from './../../../../shared/validators';
import { CadastroPf } from '../../models';
import { CadastrarPfService } from '../../services';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css'],
})
export class CadastrarPfComponent implements OnInit {
  form: FormGroup;
  show = false;
  msg = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cadastrarPfService: CadastrarPfService
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
      cnpj: ['', [Validators.required, CnpjValidator]],
    });
  }

  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf).subscribe(
      (data) => {
        this.msg = 'Realize o login para acessar o sistema.';
        this.router.navigate(['/login']);
      },
      (err) => {
        this.msg = 'Tente novamente em instantes.';
        if (err.status == 400) {
          this.msg = err.error.errors.join(' ');
        }
      }
    );
    return false;
  }
}
