import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

const URL = "https://portfolio-backend-production-f664.up.railway.app/usuarios/"
const USUARIO = "UserPrueba";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient) { }

  public getUsuario(): Observable<any> {
    return this._http.get(URL + USUARIO);
  }

  public modifyUsuario(usuario: Usuario): Observable<any> {

    let body = JSON.stringify(usuario);
    return this._http.post(URL, body);
  }
}
