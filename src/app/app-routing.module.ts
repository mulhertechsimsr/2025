import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgramacaoComponent } from './page/programacao/programacao.component';
import { LayoutComponent } from './page/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent
  },
  {
    path: "programacao",
    component: ProgramacaoComponent
  },
  // {
  //   path: "atividades/:id",
  //   component: InscricaoAtividadeComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
