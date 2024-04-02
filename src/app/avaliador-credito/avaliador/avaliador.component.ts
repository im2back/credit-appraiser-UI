import { GetClientCardsByCpf } from '../../card-module/interfaces/GetClientCardsByCpf';
import { CardApproved } from '../interfaces/CardApproved';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ShareModule } from '../../share/share.module';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { ClientSituationClient } from '../interfaces/ClientSituationClient';
import { AvaliadorServiceService } from '../services/avaliador-service.service';
import { ProtocolIssueCard } from '../interfaces/ProtocolIssueCard';
import { ClientCardDto } from '../interfaces/ClientCardDto';
import { AuthService } from '../../infra/token-decoder/auth-service.service';

@Component({
  selector: 'app-avaliador',
  standalone: true,
  imports: [InputMaskModule,CommonModule,FormsModule,InputNumberModule, InputTextModule,ButtonModule,DropdownModule,ShareModule],
  providers : [AvaliadorServiceService],
  templateUrl: './avaliador.component.html',
  styleUrl: './avaliador.component.css'
})
export class AvaliadorComponent {
  userRoles: string[] = [];

  constructor(private service : AvaliadorServiceService,private authService: AuthService ){}

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles();
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  message: string | null = null;

  cards: CardApproved[] = [];

  protocol? : ProtocolIssueCard;

  protocolString? : string = '';

  clientSituationClient: ClientSituationClient = {};

  cardsSituation ?: ClientCardDto[];

  clientSituationCard: GetClientCardsByCpf = {};

  avaliarCredito(form : NgForm){
    this.service.avaliar(form.value).subscribe((response) =>{
    this.cards = response.cards
    },
    (error) => {
      // Tratamento em caso de erro
      console.log(error);
      this.message =(error.error.message || 'Erro desconhecido');
      // Exibe a mensagem de erro por 5 segundos
      setTimeout(() => {
        this.message = null;
      }, 8000);
    }
    );
  }

  solicitarCartao(form : NgForm){
    this.service.solicitarCartao(form.value).subscribe((response) =>{
      this.protocol=response
      this.protocolString = response.protocol
    });
    form.reset();
  }

  detalharSituacao(cpf:string){
    this.service.detalharSituacao(cpf).subscribe((response) =>{
      this.clientSituationClient = response.clientDto
      this.cardsSituation= response.cards
    },
    (error) => {
      // Tratamento em caso de erro
      console.log(error);
      this.message =(error.error.message || 'Erro desconhecido');
      // Exibe a mensagem de erro por 5 segundos
      setTimeout(() => {
        this.message = null;
      }, 8000);
    }

    );}
}
