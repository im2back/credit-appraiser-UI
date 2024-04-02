import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientModuleModule } from './client-module/client-module.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { CardModuleModule } from './card-module/card-module.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientModuleModule,NavBarComponent,CardModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
