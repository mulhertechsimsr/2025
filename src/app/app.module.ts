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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
