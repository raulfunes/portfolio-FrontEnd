import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { Usuario } from 'src/app/models/usuario';
import { ExperienciaLaboralService } from 'src/app/services/api/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() expModificada: ExperienciaLaboral;
  @Input() modificacion: boolean;


  @Output() cerrarFormulario = new EventEmitter<boolean>()

  public experienciaForm: FormGroup;
  acceptQuery: boolean = true;
  experiencia: ExperienciaLaboral;

  constructor(private fb: FormBuilder, private experienciaService: ExperienciaLaboralService) {
    this.experienciaForm = this.fb.group({
      'cargo': ['',
        [Validators.required, Validators.minLength(4)]],
      'empresa': ['',
        [Validators.required]],
      'descripcion': [''],
      'imagen': ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png', [Validators.pattern(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)]],
      'fecha_inicio': ['',
        [Validators.required]],
      'fecha_fin': ['']
    })
  }

  cancelar() {
    this.cerrarFormulario.emit(false);
  }

  cargarForm() {
    if (this.modificacion) {
      this.experienciaForm.setValue(
        {
          'cargo': this.expModificada.cargo,
          'empresa': this.expModificada.empresa,
          'descripcion': this.expModificada.descripcion,
          'imagen': this.expModificada.imagen,
          'fecha_inicio': this.expModificada.fecha_inicio,
          'fecha_fin': this.expModificada.fecha_fin
        }
      )
    }
  }

  procesarForm() {
    if (this.experienciaForm.valid) {
      this.acceptQuery = false;
      this.experiencia = new ExperienciaLaboral();
      Object.assign(this.experiencia, this.experienciaForm.value);
      this.experiencia.usuario = new Usuario();
      this.experiencia.usuario.id = this.usuario.id;
      this.experienciaService.addExperiencia(this.experiencia).subscribe(
        result => {
          this.acceptQuery = true;
          this.cerrarFormulario.emit(true);
        }
      )
    } else {
      this.experienciaForm.markAllAsTouched();
    }
  }


  ngOnInit(): void {
    this.cargarForm();
  }


  aceptarModificacion() {
    if (this.experienciaForm.valid) {
      this.acceptQuery = false;
      Object.assign(this.expModificada, this.experienciaForm.value);
      this.expModificada.usuario = new Usuario();
      this.expModificada.usuario.id = this.usuario.id;
      this.experienciaService.modificarExperiencia(this.expModificada.id,
        this.expModificada).subscribe(
          result => {
            this.acceptQuery = true;
            this.cerrarFormulario.emit(true);
          }
        )
    } else {
      this.experienciaForm.markAllAsTouched();
    }
  }
}
