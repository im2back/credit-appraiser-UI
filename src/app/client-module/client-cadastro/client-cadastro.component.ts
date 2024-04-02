
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel,NgForm } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { Client } from './interfaces/cliente';
import { ClientServiceService } from './services/client-service.service';
import { ValidMessagesComponent } from '../../share/valid-messages/valid-messages.component';
import { AuthService } from '../../infra/token-decoder/auth-service.service';

@Component({
  selector: 'app-client-cadastro',
  standalone: true,
  imports: [CommonModule,FormsModule,InputTextModule,InputNumberModule,ButtonModule,InputMaskModule,
    TableModule,HttpClientModule,ValidMessagesComponent,MessagesModule,MessageModule ],
  providers : [ClientServiceService],
  templateUrl: './client-cadastro.component.html',
  styleUrl: './client-cadastro.component.css'
})
export class ClientCadastroComponent implements OnInit{

  constructor(private service : ClientServiceService,private authService: AuthService) {}


  userRoles: string[] = [];

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles();
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  message: string | null = null;

  cadastrar(form: NgForm) {
    this.service.cadastrar(form.value).subscribe(
      (response) => {
        // Tratamento em caso de sucesso
        this.message = (`${response.name} cadastrado com sucesso`);
        console.log(response);
        form.reset();
        setTimeout(() => {
          this.message = null;
        }, 5000);
      },
      (error) => {
        // Tratamento em caso de erro
        console.log(error);
        this.message = 'Erro ao cadastrar: ' + (error.error.message || 'Erro desconhecido');
        // Exibe a mensagem de erro por 5 segundos
        setTimeout(() => {
          this.message = null;
        }, 8000);
      }
    );
  }

cliente: Client | undefined;


listarCliente(cpf: string) {
  this.service.listar(cpf).subscribe((clienteRequisicao) =>
  { this.cliente =  clienteRequisicao},

  (error) => {
    // Tratamento em caso de erro
    console.log(error);
    this.message = (error.error.message || 'Erro desconhecido');
    // Exibe a mensagem de erro por 5 segundos
    setTimeout(() => {
      this.message = null;
    }, 8000);
  }

    );
}



}
