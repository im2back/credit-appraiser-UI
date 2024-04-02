import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Recuperar o token do localStorage
    const authToken = localStorage.getItem('token');

    // Verificar se existe um token
    if (authToken) {
      // Se o token existe, clonar a requisição para adicionar o cabeçalho de autorização
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });

      // Enviar a requisição clonada com o cabeçalho de autorização
      return next.handle(authReq);
    }

    // Se não houver token, enviar a requisição original
    return next.handle(request);
  }
}
