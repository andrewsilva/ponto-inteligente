import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CnpjValidator, CpfValidator } from './../../../../shared/validators';

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css'],
})
export class CadastrarPfComponent implements OnInit {
  form: FormGroup;
  show = false;
  msg = '';

  constructor(private fb: FormBuilder, private router: Router) {}

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
    alert(JSON.stringify(this.form.value));
    return false;
  }
}
