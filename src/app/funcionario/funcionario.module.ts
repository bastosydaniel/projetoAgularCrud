import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncionarioService } from '../funcionario.service';
import { ListarFuncionarioComponent } from '../listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from '../cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule

  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
