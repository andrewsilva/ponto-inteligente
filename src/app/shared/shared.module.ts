import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { TipoPipe } from './pipes';
import { DataPipe } from './pipes/data.pipe';


@NgModule({
  declarations: [MascaraDirective, TipoPipe, DataPipe],
  imports: [CommonModule],
  exports: [MascaraDirective, TipoPipe, DataPipe],
})
export class SharedModule {}
