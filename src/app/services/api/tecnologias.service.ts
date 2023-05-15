import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/models/proyecto';
import { Tecnologia } from 'src/app/models/tecnologia';

const URL = "https://portfolio-backend-production-f664.up.railway.app/tecnologia";

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  constructor(private _http: HttpClient) { }

  public guardarTecnologia(tecnologia: Tecnologia): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(tecnologia);
    return this._http.post(URL, body, httpOption);
  }

  public modificarTecnologia(id: number, tecnologia: Tecnologia): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(tecnologia);
    return this._http.put(`${URL}/${id}`, body, httpOption);
  }

  public eliminarTecnologia(id: number): Observable<any> {
    return this._http.delete(URL + "/" + id);
  }
}
