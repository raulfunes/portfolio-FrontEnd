import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Proyecto } from 'src/app/models/proyecto';
import { Tecnologia } from 'src/app/models/tecnologia';
import { Usuario } from 'src/app/models/usuario';
import { TecnologiasService } from 'src/app/services/api/tecnologias.service';

@Component({
  selector: 'app-tecnologia-form',
  templateUrl: './tecnologia-form.component.html',
  styleUrls: ['./tecnologia-form.component.css']
})
export class TecnologiaFormComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() tecModificada: Tecnologia;
  @Input() modificacion: boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  aparienciaCampo: MatFormFieldAppearance = "fill";
  public tecnologiaForm: FormGroup;
  acceptQuery: boolean = true;

  @Output() cerrarFormulario = new EventEmitter<boolean>()

  tecnologia: Tecnologia;

  constructor(private fb: FormBuilder, private tecnologiaService: TecnologiasService) {
    this.tecnologiaForm = this.fb.group({
      'nombre': ['', [Validators.required]],
      'imagen': [''],
      'porcentaje': [50, [Validators.required]]
    })
  }


  ngOnInit(): void {
    this.cargarForm();
  }

  // Añadir una Tecnologia en la BD
  procesarForm() {
    if (this.tecnologiaForm.valid) {
      this.acceptQuery = false;
      this.tecnologia = new Tecnologia();
      Object.assign(this.tecnologia, this.tecnologiaForm.value);
      this.tecnologia.usuario = new Usuario();
      this.tecnologia.usuario.id = this.usuario.id;
      this.tecnologiaService.guardarTecnologia(this.tecnologia).subscribe(
        result => {
          this.acceptQuery = true;
          this.cerrarFormulario.emit(true);
        }
      )
    } else {
      this.tecnologiaForm.markAllAsTouched();
    }
  }

  // Actualizar una Tecnologia en la BD
  aceptarModificacion() {
    if (this.tecnologiaForm.valid) {
      this.acceptQuery = false;
      Object.assign(this.tecModificada, this.tecnologiaForm.value);
      this.tecModificada.usuario = new Usuario();
      this.tecModificada.usuario.id = this.usuario.id;
      this.tecnologiaService.modificarTecnologia(this.tecModificada.id,
        this.tecModificada).subscribe(
          result => {
            this.acceptQuery = true;
            this.cerrarFormulario.emit(true);
          }
        )
    } else {
      this.tecnologiaForm.markAllAsTouched();
    }
  }

  // Cargar el morfulario cuando se hace una modificacion
  cargarForm() {
    if (this.modificacion) {
      this.tecnologiaForm.setValue(
        {
          'nombre': this.tecModificada.nombre,
          'imagen': this.tecModificada.imagen,
          'porcentaje': this.tecModificada.porcentaje
        }
      )
    }
  }

  // Cancelar la modificacion o la alta
  cancelar() {
    this.cerrarFormulario.emit(false);
  }
}
