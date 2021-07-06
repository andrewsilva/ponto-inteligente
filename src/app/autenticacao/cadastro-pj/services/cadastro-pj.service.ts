import { CadastroPj } from '../';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroPjService {
  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(env.baseUrlApi + this.PATH, cadastroPj);
  }
}
