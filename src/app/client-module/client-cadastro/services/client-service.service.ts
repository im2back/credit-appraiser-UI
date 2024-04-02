import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/cliente';
import { Observable } from 'rxjs';
import { ClienteCadastro } from '../interfaces/ClienteCadastro';

@Injectable({
  providedIn: 'root'
})

export class ClientServiceService {

  private readonly API =  "http://localhost:8080/clients"

  constructor( private http : HttpClient) { }

  listar (cpf:string) : Observable <Client> {
    return this.http.get<Client> (`${this.API}?cpf=${cpf}`);
  }

  cadastrar(cliente: ClienteCadastro) : Observable <Client> {
    return this.http.post<ClienteCadastro> (this.API,cliente);
  }
}
