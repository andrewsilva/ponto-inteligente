import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  show = false;
  msg: string = "";

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logar() {
    if (this.form.invalid) {
      return;
    }
    const login: Login = this.form.value;
    this.loginService.logar(login)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      localStorage['token'] = data['data']['token'];
      const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));
      console.log(JSON.stringify(usuarioData));
      if(usuarioData['role'] == 'ROLE_ADMIN'){
        alert("vaii pra pagina admin");
      }else{
        alert('vai pra pagina de funcionario')
      }
    },
    err =>{
      this.msg = "";
      this.msg = "Tente novamente em instantes";
      if(err['status'] == 401){
        this.msg = "Email/Senha invalido(s)";
        this.show = true;
      }

    }
    )
    this.show = false;
  }
}
