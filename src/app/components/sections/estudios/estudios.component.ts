import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Estudio } from 'src/app/models/estudio';
import { Usuario } from 'src/app/models/usuario';
import { EstudiosService } from 'src/app/services/api/estudios.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class EstudiosComponent {
  @Input() estudios: Array<Estudio>;
  @Input() usuario: Usuario;
  @Input() usuLogged: boolean;

  @Output() modificacion = new EventEmitter<boolean>()

  estModificado: Estudio;
  addMode: boolean = false;
  idEditing: number = -1;


  constructor(private estudioService: EstudiosService) {
  }

  // Eliminar estudio de la BD
  eliminarEstudio(est: Estudio) {
    this.estudioService.eliminarEstudio(est.id).subscribe(
      result => {
        this.modificacion.emit(true);
      }
    )

  }

  // Abrir la pestaña de modificacion
  modificarEstudio(est: Estudio) {
    this.estModificado = new Estudio();
    Object.assign(this.estModificado, est);
    this.idEditing = est.id;
  }

  // Cerrar los formularios abiertos
  cerrarFormulario(e) {
    if (e) {
      this.modificacion.emit(true)
    }
    this.idEditing = -1;
    this.addMode = false;
  }

  // Abrir el formulario de creacion
  turnAddMode() {
    this.addMode = true;
  }

  // Formatear la fecha con formato MM/YYYY
  getYear(fecha) {
    let dateFormat = new Date(fecha);
    if (fecha) {
      return `${dateFormat.getMonth()}/${dateFormat.getUTCFullYear()}`
    } else {
      return "Presente"
    }
  }
}
