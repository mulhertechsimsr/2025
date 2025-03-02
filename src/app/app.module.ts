import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './page/header/header.component';
import { TransitionScreenComponent } from './page/transition-screen/transition-screen.component';
import { DiferenciaisComponent } from './page/diferenciais/diferenciais.component';
import { PalestrantesComponent } from './page/palestrantes/palestrantes.component';
import { EventosComponent } from './page/eventos/eventos.component';
import { LocalComponent } from './page/local/local.component';
import { FaqComponent } from './page/faq/faq.component';
import { ParceriasComponent } from './page/parcerias/parcerias.component';
import { EmpresasComponent } from './page/empresas/empresas.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatrocinioComponent } from './page/patrocinio/patrocinio.component';
import { ProgramacaoComponent } from './page/programacao/programacao.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { LayoutComponent } from './page/layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TransitionScreenComponent,
    DiferenciaisComponent,
    PalestrantesComponent,
    EventosComponent,
    LocalComponent,
    FaqComponent,
    ParceriasComponent,
    EmpresasComponent,
    FooterComponent,
    PatrocinioComponent,
    ProgramacaoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    PaginatorModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
