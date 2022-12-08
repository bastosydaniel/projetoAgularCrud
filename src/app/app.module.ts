import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FuncionarioModule } from './funcionario';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
// import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';

//Material imports
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    // EditarFuncionarioComponent,
    // CadastrarFuncionarioComponent,
    // ListarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FuncionarioModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
