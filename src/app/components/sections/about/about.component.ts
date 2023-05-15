import { Component, Input } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Persona } from 'src/app/models/persona';
import { Usuario } from 'src/app/models/usuario';
import { PersonaService } from 'src/app/services/api/persona.service';
import { UsuarioService } from 'src/app/services/api/usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class AboutComponent {
  @Input() persona: Persona;
  @Input() usuLogged: boolean;

  acceptQuery: boolean = true;
  editMode: boolean = false;
  nuevaDescripcion: string;


  constructor(private personaService: PersonaService) { }

  descripcionFormateada() {
    return this.persona.descripcion.split("--");
  }

  turnEditMode() {
    this.nuevaDescripcion = this.persona.descripcion;
    this.editMode = !this.editMode;
  }

  editarDescripcion() {
    this.acceptQuery = false;
    this.persona.descripcion = this.nuevaDescripcion;
    this.personaService.modifyPersona(this.persona).subscribe(
      result => {
        this.acceptQuery = true;
        this.turnEditMode();
      }
    );
  }
}
