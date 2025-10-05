import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeModule } from './components/rodape/rodape.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { CriarPensamentoModule } from './components/pensamentos/criar-pensamento/criar-pensamento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RodapeModule,
    CabecalhoModule,
    CriarPensamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
