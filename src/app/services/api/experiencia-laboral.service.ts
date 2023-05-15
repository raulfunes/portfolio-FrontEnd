import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';

const URL = "https://portfolio-backend-production-f664.up.railway.app/experiencia";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  constructor(private _http: HttpClient) { }

  public addExperiencia(experiencia: ExperienciaLaboral): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(experiencia);
    return this._http.post(URL, body, httpOption);
  }

  public modificarExperiencia(id: number, experiencia: ExperienciaLaboral): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(experiencia);
    return this._http.put(`${URL}/${id}`, body, httpOption);
  }

  public eliminarExperiencia(id: number): Observable<any> {
    return this._http.delete(URL + "/" + id);
  }
}
