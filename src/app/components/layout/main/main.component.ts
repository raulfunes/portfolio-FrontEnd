import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/api/usuario.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  usuario: Usuario;
  usuLogged: boolean;

  constructor(private usuarioService: UsuarioService, private authService: AuthService) {
    this.cargarUsuarios();
    this.usuLogged = authService.logeedIn;
  }

  public cargarUsuarios() {
    this.usuarioService.getUsuario().subscribe(
      result => {
        this.usuario = new Usuario();
        console.log(result);
        Object.assign(this.usuario, result)
      },
      error => {
        this.authService.logout();
        this.cargarUsuarios();
      }
    )
  }


  logout() {
    this.authService.logout();
    this.usuLogged = false;
  }

}
