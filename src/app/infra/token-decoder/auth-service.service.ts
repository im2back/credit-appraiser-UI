import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Método para obter o token do localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para decodificar o token
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  // Método para obter o nome do usuário a partir do token decodificado
  getUserName(): string | null {
    const decodedToken = this.decodeToken();
   return decodedToken ? decodedToken.name : null;
  }

  // Método para obter as roles do usuário a partir do token decodificado
  getUserRoles(): string[] {
    const decodedToken = this.decodeToken();
    return decodedToken && decodedToken.realm_access ? decodedToken.realm_access.roles : [];
  }
}
