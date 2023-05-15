import { Estudio } from "./estudio";
import { ExperienciaLaboral } from "./experiencia-laboral";
import { Persona } from "./persona";
import { Proyecto } from "./proyecto";
import { Tecnologia } from "./tecnologia";

export class Usuario {
    id: number;
    username: string;
    email: string;
    linkedn: string;
    github: string;
    persona: Persona;
    estudios: Array<Estudio>;
    experiencia: Array<ExperienciaLaboral>;
    proyectos: Array<Proyecto>;
    tecnologias: Array<Tecnologia>;

    constructor(username?: string, email?: string, persona?: Persona, estudios?: Estudio[], experiencia?: ExperienciaLaboral[], proyectos?: Proyecto[], tecnologias?: Tecnologia[]) {
        this.username = username;
        this.email = email;
        this.persona = persona;
        this.estudios = estudios;
        this.experiencia = experiencia;
        this.proyectos = proyectos;
    }


}
