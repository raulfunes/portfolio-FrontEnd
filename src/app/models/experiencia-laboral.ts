import { Usuario } from "./usuario";

export class ExperienciaLaboral {
    id: number;
    cargo: string;
    empresa: string;
    descripcion: string;
    imagen: string
    fecha_inicio: Date;
    fecha_fin: Date;
    usuario: Usuario;

    constructor(cargo?: string, empresa?: string, descripcion?: string, imagen?: string, fecha_inicio?: Date, fecha_fin?: Date) {
        this.cargo = cargo;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }

}
