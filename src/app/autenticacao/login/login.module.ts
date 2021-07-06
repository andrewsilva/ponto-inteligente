import { UtilsModule } from './../../utils/utils.module';
import { LoginService } from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogarComponent } from './components/logar.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, LogarComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    UtilsModule
  ],
  providers: [LoginService],
})
export class LoginModule {}
