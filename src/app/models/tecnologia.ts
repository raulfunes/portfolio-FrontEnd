import { Proyecto } from "./proyecto";
import { Usuario } from "./usuario";

export class Tecnologia {
    id: number;
    nombre: string;
    imagen: string;
    link: string;
    porcentaje: number;
    proyectos: Proyecto[];
    usuario: Usuario;

    constructor(nombre?: string, imagen?: string, link?: string, porcentaje?: number, proyectos?: Proyecto[], usuario?: Usuario) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.link = link;
        this.porcentaje = porcentaje;
        this.proyectos = proyectos;
        this.usuario = usuario;
    }
}
