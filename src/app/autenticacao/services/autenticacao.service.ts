import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';
import { AuthTokenResponse } from '../login/AuthTokenResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly API = 'http://127.0.0.1:8080/login'

    constructor(private http:HttpClient) { }


    login (user : User) : Observable <AuthTokenResponse>{
      return this.http.post<AuthTokenResponse> (this.API,user);
    }

}
