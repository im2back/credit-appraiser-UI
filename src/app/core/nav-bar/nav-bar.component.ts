import { VisibilityService } from '../../infra/visible-navbar/visibility.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../infra/token-decoder/auth-service.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  userName: string | null = '';


  constructor(public visibilityService: VisibilityService,private router: Router,private authService: AuthService) { }

  ngOnInit() {
   this.userName = this.authService.getUserName();
  }

  exibindoMenu: boolean = false;

  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    sessionStorage.clear();
    this.exibindoMenu = false;
    this.userName = '';
    this.router.navigate(['/login']);

  }

}
