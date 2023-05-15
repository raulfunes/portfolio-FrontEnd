import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/api/usuario.service';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {


  getRouteAnimationData() {
    console.log("animation");
  }
}
