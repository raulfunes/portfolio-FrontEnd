import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Proyecto } from 'src/app/models/proyecto';
import { Usuario } from 'src/app/models/usuario';
import { ProyectosService } from 'src/app/services/api/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class ProyectosComponent {
  @Input() proyectos: Array<Proyecto>;
  @Input() usuario: Usuario;
  @Input() usuLogged: boolean;

  proyectoModificado: Proyecto;
  addMode: boolean = false;
  idEditing: number = -1;

  @Output() modificacion = new EventEmitter<boolean>()

  constructor(private proyectoService: ProyectosService) { }

  // Eliminar proyecto de la BD
  eliminarProyecto(proyecto: Proyecto) {
    this.proyectoService.eliminarProyecto(proyecto.id).subscribe(
      result => {

      }
    )
  }

  // Abrir la pestaña de modificacion
  modificarProyecto(proyecto: Proyecto) {
    this.proyectoModificado = new Proyecto();
    Object.assign(this.proyectoModificado, proyecto);
    this.idEditing = proyecto.id;
  }

  // Cerrar los formularios abiertos
  cerrarFormulario(e) {
    if (e) {
      this.modificacion.emit(true);
    }
    this.idEditing = -1;
    this.addMode = false;
  }

  // Abrir el formulario de creacion
  turnAddMode() {
    this.addMode = true;
  }


}
