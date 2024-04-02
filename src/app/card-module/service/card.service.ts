import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardClass } from '../interfaces/CardClass';
import { GetClientCardsByCpf } from '../interfaces/GetClientCardsByCpf';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http : HttpClient) { }

  private readonly API = "http://localhost:8080/ms-cards/cards"

  cadastrar(card : CardClass) : Observable<CardClass> {
      return this.http.post<CardClass>(this.API,card);
  }


  buscarCartoesPorCPF(cpf : string) : Observable <GetClientCardsByCpf[]> {
    return this.http.get<GetClientCardsByCpf[]> (`${this.API}?cpf=${cpf}`);
  }

}
