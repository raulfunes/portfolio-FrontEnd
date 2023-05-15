import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Tecnologia } from 'src/app/models/tecnologia';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class HabilidadesComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() tecnologias: Array<Tecnologia>;
  @Input() usuLogged: boolean;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value: number = 0;
  addMode: boolean = false;
  idEditing: number = -1;
  tecModificada: Tecnologia;

  @Output() modificacion = new EventEmitter<boolean>()

  // Abre el formulario para guardar una tecnologia
  turnAddMode() {
    this.addMode = true;
  }


  cerrarFormulario(e) {
    if (e) {
      this.modificacion.emit(true);
    }
    this.idEditing = -1;
    this.addMode = false;
  }

  modificarTecnologia(tec: Tecnologia) {
    this.tecModificada = new Tecnologia();
    Object.assign(this.tecModificada, tec);
    this.idEditing = tec.id;
  }

  ngOnInit(): void {

  }
}
