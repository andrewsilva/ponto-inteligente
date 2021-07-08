import { CadastroPf } from '../';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable()
export class CadastrarPfService {
  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
    return this.http.post(env.baseUrlApi + this.PATH, cadastroPf);
  }
}
