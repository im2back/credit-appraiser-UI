import { Observable, ObservedValueOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DtoAvaliacaoCredito } from '../interfaces/DtoAvaliacaoCredito';
import { ResponseWithCards } from '../interfaces/ResponseWithCards';
import { SolicitarCartaoDto } from '../interfaces/SolicitarCartaoDto';
import { ProtocolIssueCard } from '../interfaces/ProtocolIssueCard';
import { ClientSituation } from '../interfaces/ClientSituation';

@Injectable({
  providedIn: 'root'
})
export class AvaliadorServiceService {

  private readonly API = 'http://localhost:8080/credit-appraiser'

  constructor(private http : HttpClient) { }

  avaliar(data : DtoAvaliacaoCredito) : Observable <ResponseWithCards> {
    return this.http.post<ResponseWithCards> (this.API,data);
  }

  solicitarCartao(data : SolicitarCartaoDto ) : Observable <ProtocolIssueCard> {
    return this.http.post<ProtocolIssueCard> (`${this.API}/request-card`,data);
  }

  detalharSituacao (cpf:string ) : Observable <ClientSituation> {
      return this.http.get<ClientSituation> (`${this.API}/client-status?cpf=${cpf}`)
  }

}
