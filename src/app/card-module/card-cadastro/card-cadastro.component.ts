
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';


import { GetClientCardsByCpf } from '../interfaces/GetClientCardsByCpf';
import { ShareModule } from '../../share/share.module';
import { CardService } from '../service/card.service';
import { CardClass } from '../interfaces/CardClass';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { AuthService } from '../../infra/token-decoder/auth-service.service';

@Component({
  selector: 'app-card-cadastro',
  standalone: true,
  imports: [InputTextModule,CommonModule,FormsModule,ButtonModule,ShareModule,InputNumberModule,DropdownModule,InputMaskModule],
  providers : [CardService],
  templateUrl: './card-cadastro.component.html',
  styleUrl: './card-cadastro.component.css'
})
export class CardCadastroComponent implements OnInit  {
  userRoles: string[] = [];

  constructor(private service : CardService,private authService: AuthService) {}
  flags : String[]| undefined;

  selectedFlagCode: string | undefined;

  ngOnInit() {
    this.flags = ['VISA','MASTERCARD'];
    this.userRoles = this.authService.getUserRoles();
}

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }


  clientCard: GetClientCardsByCpf[]= [];

  cartaoCadastrado?: CardClass;

  cadastrarCartao(form: NgForm){
    console.log(form.value)
    this.service.cadastrar(form.value).subscribe((response) => {
      this.cartaoCadastrado = response
      alert(this.cartaoCadastrado)
    });
    form.reset();
  }


  buscarCartoes(cpf:string){
    this.service.buscarCartoesPorCPF(cpf).subscribe((response) => {
      this.clientCard = response

    });

  }

}
