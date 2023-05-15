import { Usuario } from "./usuario";

export class Estudio {
    id: number;
    titulo: string;
    institucion: string;
    descripcion: string;
    imagen: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    usuario: Usuario;

    constructor(titulo?: string, institucion?: string, descripcion?: string, imagen?: string, fecha_inicio?: Date, fecha_fin?: Date) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
    }
}
