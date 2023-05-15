import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/proyecto';

const URL = "https://portfolio-backend-production-f664.up.railway.app/proyectos";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private _http: HttpClient) { }

  public guardarProyecto(proyecto: Proyecto): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(proyecto);
    return this._http.post(URL, body, httpOption);
  }

  public modificarProyecto(id: number, proyecto: Proyecto): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(proyecto);
    return this._http.put(`${URL}/${id}`, body, httpOption);
  }

  public eliminarProyecto(id: number): Observable<any> {
    return this._http.delete(URL + "/" + id);
  }
}
