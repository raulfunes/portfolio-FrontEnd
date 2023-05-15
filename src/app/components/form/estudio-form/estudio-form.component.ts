import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/models/estudio';
import { Usuario } from 'src/app/models/usuario';
import { EstudiosService } from 'src/app/services/api/estudios.service';

@Component({
  selector: 'app-estudio-form',
  templateUrl: './estudio-form.component.html',
  styleUrls: ['./estudio-form.component.css']
})
export class EstudioFormComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() estModificado: Estudio;
  @Input() modificacion: boolean;
  public estudioForm: FormGroup;

  acceptQuery: boolean = true;

  @Output() cerrarFormulario = new EventEmitter<boolean>()

  estudio: Estudio;

  constructor(private fb: FormBuilder, private estudioService: EstudiosService) {
    this.estudioForm = this.fb.group({
      'titulo': ['', [Validators.required, Validators.minLength(4)]],
      'institucion': ['', [Validators.required]],
      'descripcion': [''],
      'imagen': ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'],
      'fecha_inicio': ['', Validators.required],
      'fecha_fin': ['']
    })
  }

  // Añadir un Estudio en la BD
  procesarForm() {
    if (this.estudioForm.valid) {
      this.acceptQuery = false;
      this.estudio = new Estudio();
      Object.assign(this.estudio, this.estudioForm.value);
      this.estudio.usuario = new Usuario();
      this.estudio.usuario.id = this.usuario.id;
      this.estudioService.guardarEstudio(this.estudio).subscribe(
        result => {
          this.acceptQuery = true;
          this.cerrarFormulario.emit(true);
        }
      )
    } else {
      this.estudioForm.markAllAsTouched();
    }
  }

  // Actualizar un Estudio en la BD
  aceptarModificacion() {
    if (this.estudioForm.valid) {
      this.acceptQuery = false;
      Object.assign(this.estModificado, this.estudioForm.value);
      this.estModificado.usuario = new Usuario();
      this.estModificado.usuario.id = this.usuario.id;
      this.estudioService.modificarEstudio(this.estModificado.id,
        this.estModificado).subscribe(
          result => {
            this.acceptQuery = true;
            this.cerrarFormulario.emit(true);
          }
        )
    } else {
      this.estudioForm.markAllAsTouched();
    }
  }


  ngOnInit(): void {
    this.cargarForm();
  }

  // Cargar el morfulario cuando se hace una modificacion
  cargarForm() {
    if (this.modificacion) {
      this.estudioForm.setValue(
        {
          'titulo': this.estModificado.titulo,
          'institucion': this.estModificado.institucion,
          'descripcion': this.estModificado.descripcion,
          'imagen': this.estModificado.imagen,
          'fecha_inicio': this.estModificado.fecha_inicio,
          'fecha_fin': this.estModificado.fecha_fin
        }
      )
    }
  }

  // Cancelar la modificacion o la alta
  cancelar() {
    this.cerrarFormulario.emit(false);
  }


}
