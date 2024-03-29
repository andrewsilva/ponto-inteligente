import { Tipo } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: any, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo: Tipo): string{
    let tipoDesc: string;
    switch(tipo){
      case Tipo.INICIO_TRABALHO:
        tipoDesc = 'Inicio do Trabalho';
        break;
      case Tipo.INICIO_ALMOCO:
        tipoDesc = "Inicio do Almoço";
        break;
      case Tipo.TERMINO_ALMOCO:
        tipoDesc = "Termino do Almoço";
        break;
      case Tipo.TERMINO_TRABALHO:
        tipoDesc = "Termino do Trabalho";
        break;
      default:
        tipoDesc = tipo;
        break;
    }
    return tipoDesc;
  }

}
