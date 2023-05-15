export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    telefono: string;
    descripcion: string;
    pais: string;
    provincia: string;
    img: string;

    constructor (nombre: string, apellido: string, fecha_nacimiento, telefono: string, descripcion: string, pais: string, provincia: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.telefono = telefono;
        this.descripcion = descripcion;
        this.pais = pais;
        this.provincia = provincia;
        this.img = img;
    }
 
}
