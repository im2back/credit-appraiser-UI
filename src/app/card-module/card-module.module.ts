import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCadastroComponent } from './card-cadastro/card-cadastro.component';



@NgModule({
  declarations: [],
  imports: [ CommonModule,CardCadastroComponent ],
  exports :[CardCadastroComponent]
})
export class CardModuleModule { }
