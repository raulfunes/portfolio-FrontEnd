import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { Usuario } from 'src/app/models/usuario';
import { ExperienciaLaboralService } from 'src/app/services/api/experiencia-laboral.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
    animations: [
    fadeInOnEnterAnimation()
  ]
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencias: Array<ExperienciaLaboral>;
  @Input() usuario: Usuario;
  @Input() usuLogged: boolean;
  expModificada: ExperienciaLaboral;
  addMode: boolean = false;
  idEditing: number = -1;

  @Output() modificacion = new EventEmitter<boolean>()

  constructor(private experienciaService: ExperienciaLaboralService) {
  }

  cerrarFormulario(e) {
    if (e) {
      this.modificacion.emit(true);
    }
    this.idEditing = -1;
    this.addMode = false;
  }

  ngOnInit(): void {
  }


  turnAddMode() {
    this.addMode = true;
  }


  recargar() {
    this.modificacion.emit(true);
  }

  eliminarExperiencia(exp: ExperienciaLaboral) {
    this.experienciaService.eliminarExperiencia(exp.id).subscribe(
      result => {
        this.recargar();
      }
    )

  }

  modificarExperiencia(exp: ExperienciaLaboral) {
    this.expModificada = new ExperienciaLaboral();
    Object.assign(this.expModificada, exp);
    console.log(this.expModificada);
    this.idEditing = exp.id;
  }


  getYear(fecha) {
    let dateFormat = new Date(fecha);
    if (fecha) {
      return `${dateFormat.getMonth()}/${dateFormat.getUTCFullYear()}`
    } else {
      return "Presente"
    }
  }

}
