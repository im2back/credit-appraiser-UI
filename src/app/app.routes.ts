import { Routes } from '@angular/router';

import { CardCadastroComponent } from './card-module/card-cadastro/card-cadastro.component';
import { ClientCadastroComponent } from './client-module/client-cadastro/client-cadastro.component';
import { AvaliadorComponent } from './avaliador-credito/avaliador/avaliador.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { AuthGuard } from './infra/protected-components/AuthGuard';

export const routes: Routes = [
  {
    path : 'clients',
    component : ClientCadastroComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'aval',
    component : AvaliadorComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'cards',
    component : CardCadastroComponent,
    canActivate: [AuthGuard]
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : 'clients',
    pathMatch: 'full'
  },


];
