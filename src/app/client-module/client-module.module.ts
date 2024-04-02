import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCadastroComponent } from './client-cadastro/client-cadastro.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,ClientCadastroComponent
  ],
  exports:[ClientCadastroComponent]
})
export class ClientModuleModule { }
