import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { Tecnologia } from 'src/app/models/tecnologia';
import { Usuario } from 'src/app/models/usuario';
import { EstudiosService } from 'src/app/services/api/estudios.service';
import { ProyectosService } from 'src/app/services/api/proyectos.service';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css']
})
export class ProyectoFormComponent implements OnInit {
  @Input() usuario: Usuario;
  @Input() proyectoModificado: Proyecto;
  @Input() modificacion: boolean
  public proyectoForm: FormGroup;

  @Output() cerrarFormulario = new EventEmitter<boolean>()

  acceptQuery: boolean = true;
  proyecto: Proyecto;

  ngOnInit(): void {
    this.cargarForm();
  }

  constructor(private fb: FormBuilder, private proyectoService: ProyectosService) {
    this.proyectoForm = this.fb.group({
      'titulo': ['', [Validators.required, Validators.minLength(4)]],
      'sub_titulo': [''],
      'descripcion': [''],
      'imagen': ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png', [Validators.pattern(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)]],
      'link_repo': ['', [Validators.required]],
      'link_deploy': ['', [Validators.required]],
      'tecnologias': ['']
    })
  }


  procesarForm() {
    if (this.proyectoForm.valid) {
      this.acceptQuery = false;
      this.proyecto = new Proyecto();
      Object.assign(this.proyecto, this.proyectoForm.value);
      this.proyecto.usuario = new Usuario();
      this.proyecto.usuario.id = this.usuario.id;
      this.proyectoService.guardarProyecto(this.proyecto).subscribe(
        result => {
          this.acceptQuery = true;
          this.cerrarFormulario.emit(true);
        }
      )
    } else {
      this.proyectoForm.markAllAsTouched();
    }
  }

  // Actualizar un Estudio en la BD
  aceptarModificacion() {
    this.acceptQuery = false;
    console.log(this.proyectoForm.value);
    if (this.proyectoForm.valid) {
      Object.assign(this.proyectoModificado, this.proyectoForm.value);
      this.proyectoModificado.usuario = new Usuario();
      this.proyectoModificado.usuario.id = this.usuario.id;
      this.proyectoService.modificarProyecto(this.proyectoModificado.id,
        this.proyectoModificado).subscribe(
          result => {
            this.acceptQuery = true;
            this.cerrarFormulario.emit(true);
          }
        )
    } else {
      this.proyectoForm.markAllAsTouched();
    }
  }

  // Cargar el morfulario cuando se hace una modificacion
  cargarForm() {
    if (this.modificacion) {
      console.log(this.proyectoModificado);
      this.proyectoForm.setValue(
        {
          'titulo': this.proyectoModificado.titulo,
          'sub_titulo': this.proyectoModificado.sub_titulo,
          'descripcion': this.proyectoModificado.descripcion,
          'imagen': this.proyectoModificado.imagen,
          'link_repo': this.proyectoModificado.link_repo,
          'link_deploy': this.proyectoModificado.link_deploy,
          'tecnologias': this.proyectoModificado.tecnologias,
        }
      )
    }
  }

  // Cancelar la modificacion o la alta
  cancelar() {
    this.cerrarFormulario.emit(false);
  }
}
