
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';

import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutenticacaoService } from '../services/autenticacao.service';
import { VisibilityService } from '../../infra/visible-navbar/visibility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,InputNumberModule,InputTextModule,ButtonModule, ],
  providers:[AutenticacaoService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service : AutenticacaoService, private visibilityService: VisibilityService,private router: Router){}

  ngOnInit() {
    this.visibilityService.hide();
  }

  ngOnDestroy() {
    this.visibilityService.show();
  }

login(form:NgForm){
this.service.login(form.value).subscribe((response)=>{

// Armazenar o token
localStorage.setItem('token', response.access_token);

// Se o token estiver presente o usuario é redirecionado.
const storedToken = localStorage.getItem('token');
if (storedToken != null) {
  this.router.navigate(['/clients']);
}

});

form.reset();

}

}
