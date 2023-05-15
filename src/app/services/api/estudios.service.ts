import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from 'src/app/models/estudio';

const URL = "https://portfolio-backend-production-f664.up.railway.app/estudios";

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private _http: HttpClient) { }

  public guardarEstudio(estudio: Estudio): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(estudio);
    return this._http.post(URL, body, httpOption);
  }

  public modificarEstudio(id: number, estudio: Estudio): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(estudio);
    return this._http.put(`${URL}/${id}`, body, httpOption);
  }

  public eliminarEstudio(id: number): Observable<any> {
    return this._http.delete(URL + "/" + id);
  }

}
