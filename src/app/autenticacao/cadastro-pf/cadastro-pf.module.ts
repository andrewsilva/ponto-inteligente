import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilsModule } from './../../utils/utils.module';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent, CadastroPfComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    UtilsModule,
    NgbModule
  ],
})
export class CadastroPfModule {}
