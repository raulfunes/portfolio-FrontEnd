import { Tecnologia } from "./tecnologia";
import { Usuario } from "./usuario";

export class Proyecto {
    id: number;
    titulo: string;
    sub_titulo: string;
    descripcion: string;
    imagen: string;
    link_repo: string;
    link_deploy: string;
    usuario: Usuario;
    tecnologias: Tecnologia[];

    constructor(titulo?: string, sub_titulo?: string, descripcion?: string, imagen?: string, link_repo?: string, link_deploy?: string, usuario?: Usuario, tecnologias?: Tecnologia[]) {
        this.titulo = titulo;
        this.sub_titulo = sub_titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.link_repo = link_repo;
        this.link_deploy = link_deploy;
        this.usuario = usuario;
        this.tecnologias = tecnologias;
    }
}
