import { RouterModule } from '@angular/router';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
