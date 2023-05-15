import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from 'src/app/models/persona';

const URL = "https://portfolio-backend-production-f664.up.railway.app/personas/"

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _http: HttpClient) { }

  public modifyPersona(persona: Persona): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(persona);
    return this._http.put(URL + persona.id, body, httpOption);
  }
}
